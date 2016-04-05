'use strict';

var gulp = require('gulp');
var semver = require('semver');
var argv = require('yargs').argv;

var $ = require('gulp-load-plugins')();

/**
 * Ajoute les tâches Gulp pour la PIC
 * @param {Object} [options] les options
 */
module.exports = function (options) {

	/** Les valeurs possibles pour mettre à jour les différentes parties de la version. */
	var TYPES_VERSION_AUTORISES = ['major', 'minor', 'patch', 'prerelease'];

	/**
	 * Modifie la version dans les fichiers bower.json, package.json et app/version.json.
	 * @param p_version La version à setter
	 */
	function updateVersionInFile(p_version) {
		// Utilisation de gulp-filter pour écrire dans les bons répertoires
		var manifestFilter = $.filter(['version.json']);
		var regularJsons = $.filter(['*', '!version.json']);

		return gulp.src(['bower.json', 'package.json', options.src + '/version.json'])
			.pipe($.bump({
				version: p_version
			}))
			.pipe(manifestFilter)
			.pipe(gulp.dest(options.src))
			.pipe(manifestFilter.restore())
			.pipe(regularJsons)
			.pipe(gulp.dest('./'));
	}

	/**
	 * Tâche incVersion : incrémente la version du projet dans les fichiers bower.json, package.json et app/version.json
	 * - Paramètre --type le type de mise à jour : major, minor, patch ou prerelease. Cela permet de modifier un membre de la version. Si aucun
	 * paramètre fournit la mise à jour est de type <code>patch</code>
	 */
	gulp.task('incVersion', function () {
		// Sélection du type de mise à jour
		var type = 'patch';
		var index = TYPES_VERSION_AUTORISES.indexOf(argv.type);
		if (-1 != index) {
			type = TYPES_VERSION_AUTORISES[index];
		}

		// Incremente la version
		var newVer = semver.inc(options.pkg.version, type);

		// Maj des fichiers
		return updateVersionInFile(newVer + '-SNAPSHOT');
	});

	/**
	 * Tâche updateVersion : modifie la version du projet avec la version passée en paramètre dans les fichiers bower.json, package.json et app/version.json
	 * - Paramètre --version la version à mettre dans les fichiers.
	 */
	gulp.task('updateVersion', function () {
		// récupération de la version
		var newVer = argv.version;
		if (newVer) {
			// Maj des fichiers
			return updateVersionInFile(newVer);
		}
	});

	/**
	 * Tâche copy.dist.to.package : Copie l'application à distribuer dans un répertoire temporaire portant le nom du package.
	 */
	gulp.task('copy.dist.to.package', ['dist'], function () {
		return gulp.src(options.dist + '/**')
			.pipe(gulp.dest(options.dist + '/' + options.pkg.name));
	});

	/**
	 * Tâche zip : Zip l'application distribuée.
	 *
	 * Le nom du zip est constitué des attributs <code>name</code> et <code>version</code> du <code>package.json</code>
	 */
	gulp.task('zip', ['dist', 'copy.dist.to.package'], function () {
		return gulp.src(options.dist + '/**/' + options.pkg.name + '/**')
			.pipe($.zip(options.pkg.name + '-' + options.pkg.version + '.zip'))
			.pipe(gulp.dest('dist'));
	});


	/**
	 * Lance l'analyse Sonar.
	 */
	gulp.task('sonar', function () {
		var sonar_host = process.env.SONAR_HOST;
		var sonar_jdbc_url = process.env.SONAR_JDBC_URL;
		var sonar_jdbc_username = process.env.SONAR_JDBC_USERNAME;
		var sonar_jdbc_password = process.env.SONAR_JDBC_PASSWORD;

		var config = {
			sonar: {
				// Accès Sonar
				host: {
					url: sonar_host
				},
				jdbc: {
					url: sonar_jdbc_url,
					username: sonar_jdbc_username,
					password: sonar_jdbc_password
				},
				// Identifiants Sonar
				projectKey: 'sonar:' + options.pkg.name,
				projectName: options.pkg.name,
				projectVersion: options.pkg.version,
				// Répertoires des sources (séparés par une virgule)
				sources: options.src,
				exclusions: '**/**/*_test.js',
				// Types
				language: 'js',
				sourceEncoding: 'UTF-8',
				// Rapport de couverture de code
				javascript: {
					lcov: {
						reportPath: options.reports + '/coverage/lcov.info'
					}
				}
			}
		};

		return gulp.src('thisFileDoesNotExist.js', {read: false})
			.pipe($.sonar(config))
			.on('error', $.util.log);
	});

};
