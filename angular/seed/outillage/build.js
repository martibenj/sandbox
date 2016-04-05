'use strict';

var PLUGIN_NAME = "build.js";
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var argv = require('yargs').argv;
var merge = require('merge-stream');


module.exports = function (options) {

	/**
	 * Tâche lint : contrôle la qualité des fichiers JS en utilisant le plugin gulp-jshint
	 * - Sélection de tous les fichiers JS de l'application
	 * - Utilisation de la configuration JSHint présent dans le fichier .jshintrc
	 * Attention : avec le reporter 'default', les erreurs relevées par JSHint sont tracées
	 * mais cela n'arrête pas le processus. Pour arréter le processus, il faut utiliser le reporter 'fail'.
	 */
	gulp.task('lint', function () {
		return gulp.src([options.src + "/**/*.js"])
			.pipe($.jshint())
			.pipe($.jshint.reporter('default'));
	});

	/**
	 * Tâche quality : contrôle la qualité des fichiers de l'application
	 * - Qualité des fichiers JS via la tâche lint
	 */
	gulp.task('quality', ['lint']);

	/**
	 * Tâche clean : avec plugin gulp-clean.
	 * - Suppression des répertoires 'dist'
	 *
	 * Le return est important il permet d'attendre la fin de la tache avant d'en exécuter une autre.
	 */
	gulp.task('clean', function () {
		return gulp.src([options.dist, options.reports], {read: false})
			.pipe($.clean({force: true}));
	});

	/**
	 * Tâche copy :
	 * - Copie de tous les fichiers sauf les fichiers JS du répertoire 'app' vers le répertoire de distribution
	 */
	gulp.task("copy", function () {
		return gulp.src([options.src + '/**', '!' + options.src + '/**/*.js'])
			.pipe(gulp.dest(buildPathContextRoot()));
	});


	/**
	 * Zip des sources de l'application
	 *
	 * Le nom du zip est constitué des attributs <code>name</code> et <code>version</code> du <code>package.json</code>
	 */
	gulp.task('zip:dev', ['zip:dev:prepare'], function () {
		return gulp.src([options.dist + '/**', options.dist + '/**/.*rc', options.dist + '/**/.editorconfig'])
			.pipe($.zip(options.pkg.name + '-src-' + options.pkg.version + '.zip'))
			.pipe(gulp.dest('dist'));
	});

	/**
	 * Prépare le zip des sources
	 */
	gulp.task('zip:dev:prepare', function (callback) {
		runSequence('clean', 'copy:dev', callback);
	});

	/**
	 * Copie tous les fichiers de dev
	 */
	gulp.task("copy:dev", function () {
		var src = gulp.src([options.src + '/**']).pipe(gulp.dest(buildPathContextRoot() + '/' + options.src));
		var tools = gulp.src(['outillage/**']).pipe(gulp.dest(buildPathContextRoot() + '/outillage'));
		var e2e =			gulp.src(['e2e-tests/**']).pipe(gulp.dest(buildPathContextRoot() + '/e2e-tests'));
		var root =gulp.src(['*.md', '*.js', '*.json', '.*rc', '.editorconfig']).pipe(gulp.dest(buildPathContextRoot()));
		return merge(src, tools, e2e, root);
	});

	/**
	 * Tâche dist:prepare : Préparation des fichiers à distribuer
	 * - Vide les répertoires d'accueil
	 * - Controle de la qualité des fichiers
	 * - Lance les tests
	 * - Copie les fichiers dans le répertoire de distribution
	 * Ces tâches sont appelées séquentiellement pour permettre :
	 * - de vider les répertoires, avant de copier
	 * - de visualiser plus facilement chaque tâche dans les traces
	 */
	gulp.task('dist:prepare', function (callback) {
		runSequence('clean', 'quality', 'test', 'copy', callback);
	});

	/**
	 * Tâche dist : fabrique l'application à distribuer
	 * - Pré-requis : dist:prepare
	 * - Récupération des fichiers JS avec le plugin gulp-useref
	 * - Création des fichiers source map avec le plugin gulp-sourcemaps
	 * - Minification des fichiers JS avec le plugin gulp-uglify
	 * - Calcul d'un n° de révision des fichiers JS avec le plugin gulp-rev
	 * - Remplacement du nom de fichiers avec révision dans le HTML avec le plugin gulp-rev-replace
	 * Si le paramètre "options.pkg.contextRoot" existe, le répertoire de destination est [options.dist]/[options.pkg.contextRoot]
	 * Sinon par défaut, le répertoire de destination est [options.dist]
	 */
	gulp.task('dist', ['dist:prepare'], function () {
		var assets = $.useref.assets();
		return gulp.src(options.src + '/index.html')
			.pipe(assets)
			.pipe($.if('*.js', $.ngAnnotate({
				single_quotes: true
			})))
			.pipe($.sourcemaps.init())
			.pipe($.if('*.js', $.uglify()))
			.pipe($.rev())
			.pipe($.sourcemaps.write('.'))
			.pipe(assets.restore())
			.pipe($.useref())
			.pipe($.revReplace())
			.pipe(gulp.dest(buildPathContextRoot()));
	});


	/**
	 * Tâche maven-deploy : Déploiement des fichiers de distribution via Maven Deploy.
	 * @see mavenDeploy
	 * @see buildFileMavenDeployConf
	 */
	gulp.task('maven-deploy', function () {
		var config = {};
		var fileConf = buildFileMavenDeployConf();
		try {
			config = require(fileConf);
			$.util.log('Utilisation du fichier de configuration de déploiement : ' + fileConf);
		}
		catch (e) {
			// Le fichier est introuvable ... Tant pis, on ne s'en servira pas
		}
		return mavenDeploy(config);
	});


	/**
	 * Construction le chemin et nom du fichier de configuration de déploiement.
	 * Par défaut le fichier est "maven-deploy-conf.json"
	 * Si le paramètre --deploy est présent en ligne de commande, la valeur de ce paramètre est ajouté au nom du fichier : "maven-deploy-conf[-[ValeurParamDeploy]].json"
	 * @returns {string}
	 */
	function buildFileMavenDeployConf() {
		var confDeploy = argv.deploy;
		var fileConf = '../maven-deploy-conf';
		if (confDeploy) {
			fileConf += '-' + confDeploy;
		}
		fileConf += '.json';
		return fileConf;
	}

	/**
	 * Tâche dist-maven-deploy : Fabrication des fichiers de distribution puis déploiement via Maven Deploy.
	 *
	 * @see mavenDeploy
	 */
	gulp.task('dist-maven-deploy', function (callback) {
		runSequence('dist', 'maven-deploy', callback);
	});

	/**
	 * Construit le chemin de contexte racine dans la distribution finale.
	 * Dépendant de "options.dist", "options.pkg.contextRoot" et "options.pkg.name"
	 * Par défaut, le chemin de contexte racine est : [options.dist]/[options.pkg.name]
	 * Si "options.pkg.contextRoot" existe, le chemin est : [options.dist]/[options.pkg.contextRoot]
	 * Si "options.pkg.contextRoot" et "options.pkg.name" n'existe pas, le chemin est [options.dist]
	 */
	function buildPathContextRoot() {
		var context = options.pkg.contextRoot || options.pkg.name;
		var dist = options.dist;
		if (context) {
			dist = options.dist + '/' + context;
		}
		return dist;
	}

	/**
	 * Déploiement des fichiers de distribution via Maven Deploy.
	 * Basé sur les plugins gulp-maven-deploy et maven-deploy.
	 * Pour la configuration voir le plugin maven-deploy pour plus de détail.
	 * Ci-dessous les différents éléments avec les priorités d'affectation :
	 * <ul>
	 *      <li>groupId : pConfig.groupId OU options.mavenDeploy.groupId OU options.pkg.groupId</li>
	 *      <li>artifactId : pConfig.artifactId OU options.mavenDeploy.artifactId OU options.pkg.artifactId OU options.pkg.name</li>
	 *      <li>buildDir : pConfig.buildDir OU options.mavenDeploy.buildDir OU options.dist</li>
	 *      <li>finalName : pConfig.finalName OU options.mavenDeploy.finalName OU options.pkg.name</li>
	 *      <li>type : pConfig.type OU options.mavenDeploy.type OU 'zip'</li>
	 *      <li>fileEncoding : pConfig.fileEncoding OU options.mavenDeploy.fileEncoding OU 'utf-8'</li>
	 *      <li>repositories : pConfig.repositories OU options.mavenDeploy.repositories</li>
	 * </ul>
	 * @param pConfig La configuration optionnelle
	 * @returns {*} Le flux
	 */
	function mavenDeploy(pConfig) {
		var TEXTE_ERREUR = 'Configuration de déploiement en erreur : ';
		var paramConfig = pConfig || {};


		var config = {};

		if (options.mavenDeploy) {
			config.groupId = paramConfig.groupId || options.mavenDeploy.groupId || options.pkg.groupId;
			config.artifactId = paramConfig.artifactId || options.mavenDeploy.artifactId || options.pkg.artifactId || options.pkg.name;
			config.buildDir = paramConfig.buildDir || options.mavenDeploy.buildDir || options.dist;
			config.finalName = paramConfig.finalName || options.mavenDeploy.buildDir || options.pkg.name;
			config.type = paramConfig.type || options.mavenDeploy.type || 'zip';
			config.fileEncoding = paramConfig.fileEncoding || options.mavenDeploy.fileEncoding || 'utf-8';
			config.repositories = paramConfig.repositories || options.mavenDeploy.repositories;
		} else {
			config.groupId = paramConfig.groupId || options.pkg.groupId;
			config.artifactId = paramConfig.artifactId || options.pkg.artifactId || options.pkg.name;
			config.buildDir = paramConfig.buildDir || options.dist;
			config.finalName = paramConfig.finalName || options.pkg.name;
			config.type = paramConfig.type || 'zip';
			config.fileEncoding = paramConfig.fileEncoding || 'utf-8';
			config.repositories = paramConfig.repositories;
		}

		$.util.log('Déploiement configuration : ' + JSON.stringify(config));
		if (!config.groupId) {
			throw new $.util.PluginError(PLUGIN_NAME, TEXTE_ERREUR + '"groupId" manquant');
		}
		if (!config.repositories) {
			throw new $.util.PluginError(PLUGIN_NAME, TEXTE_ERREUR + '"repositories" manquant');
		}
		return gulp.src('.').pipe($.mavenDeploy.deploy({config: config}));
	}

	// Définition des fonctions publiques
	return {
		mavenDeploy: mavenDeploy
	};

};
