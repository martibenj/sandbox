'use strict';

var gulp = require('gulp');
var jsonProxy = require('json-proxy');
var argv = require('yargs').argv;

var $ = require('gulp-load-plugins')();

/**
 * Ajoute les tâches Gulp pour lancer un serveur de dev
 * @param {Object} [options] les options
 */
module.exports = function (options) {

	/**
	 * Renvoie l'environnement demandé.
	 * @param env L'environnement à sélectionner pour proxifier les requêtes
	 */
	function findEnvironnement(env) {
		var selected = options.envs[env];
		console.log("Environnement sélectioné : " + env, selected);
		return jsonProxy.initialize(selected);
	}

	/**
	 * Démarre un serveur HTTP
	 * @param racine La racine à exposer.
	 * @param env L'environnement à sélectionner pour proxifier les requêtes
	 */
	function demarrerServeur(racine, env) {
		$.connect.server(
			{
				root: racine,
				port: 8888,
				livereload: true,
				middleware: function () {
					return [
						findEnvironnement(env)
					]
				}
			}
		);
	}


	/**
	 * Lance un serveur pour tester l'application en cours de développement.
	 * Dans votre navigateur, utiliser l'URL : "http://localhost:8888/"
	 */
	gulp.task('connect', function () {
		var env = argv.env || "defaut";
		demarrerServeur(['.', options.src], env);
	});

	/**
	 * Lance un serveur pour tester l'application en cours de développement
	 * en observant et rechargeant la page à chaque modification d'un fichier HTML ou Javascript.
	 * Dans votre navigateur, utiliser l'URL : "http://localhost:8888/"
	 */
	gulp.task('connect:watch', ['connect', 'watchHtml', 'watchJs']);

	/**
	 * Lance un serveur pour tester l'application distribuée.
	 * Dans votre navigateur, utiliser l'URL : "http://localhost:8888/"
	 */
	gulp.task('connect:dist', function () {
		var env = argv.env || "tuu";
		demarrerServeur(buildPathContextRoot(), env);
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

	// --- Watch
	/**
	 * Observe les modifications des fichiers HTML et déclenche une action : rechargement du HTML dans le navigateur.
	 */
	gulp.task('watchHtml', function () {
		gulp.watch([options.src + '/**/*.html'], ['reloadHtml']);
	});

	/**
	 * Observe les modifications des fichiers Javascript et déclenche des actions :
	 * <ul>
	 *     <li>Exécution des tests unitaires</li>
	 *     <li>Rechargement du Javascript dans le navigateur</li>
	 * </ul>
	 */
	gulp.task('watchJs', function () {
		//gulp.watch([options.src + '/**/*.js'], ['test', 'reloadJs']);
		gulp.watch([options.src + '/**/*.js'], ['reloadJs']);
	});

	// --- Reload
	/**
	 * Recharge les fichiers HTML dans le navigateur.
	 */
	gulp.task('reloadHtml', function () {
		gulp.src(options.src + '/**/*.html')
			.pipe($.connect.reload());
	});


	/**
	 * Recharge les fichiers Javascript dans le navigateur.
	 */
	gulp.task('reloadJs', function () {
		gulp.src(options.src + '/**/*.js')
			.pipe($.connect.reload());
	});
};

