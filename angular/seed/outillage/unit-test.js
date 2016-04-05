'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var ServerKarma = require('karma').Server;

module.exports = function (options) {

	// list of files / patterns to load in the browser
	var files = [
		'node_modules/angular/angular.js',
		'node_modules/angular-route/angular-route.js',
		'node_modules/angular-mocks/angular-mocks.js',
		options.src + '/app.js',
		options.src + '/book/**/*.js'
	];

	// Configuration des tests unitaires en local et sur la PIC
	var config = {
		local: {
			hostname: 'localhost',
			browsers: ['PhantomJS2']
		},
		pic: {
			hostname: 'picpe-gfpe-h8yt010.sii24.pole-emploi.intra',
			browsers: ['Firefox'],
			customLaunchers: {
				'Firefox': {
					base: 'WebDriver',
					config: {
						hostname: 'swzksd.sii24.pole-emploi.intra',
						port: 4444
					},
					browserName: 'firefox',
					platform: 'WINDOWS'
				}
			}
		}
	};

	/**
	 * Karma testing (local)
	 */
	gulp.task('test', function (done) {
		var karma = new ServerKarma({
			configFile: __dirname + '/../karma.conf.js',
			singleRun: true,
			files: files,
			hostname: config.local.hostname,
			browsers: config.local.browsers
		}, function (exitStatus) {
			$.util.log('Sortie Karma avec : ' + exitStatus);
			done(exitStatus ? "Il y a des tests en erreur !" : undefined);
		});
		karma.start();
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
	 * Tests sur le module distribué et minifié
	 */
	gulp.task('test:dist', function (done) {
		var karma = new ServerKarma({
			configFile: __dirname + '/../karma.conf.js',
			singleRun: true,
			files: [
				buildPathContextRoot()+'/vendor*.js',
				'node_modules/angular-mocks/angular-mocks.js',
				buildPathContextRoot()+'/app*.js',
				options.src + '/**/*_test.js'
			],
			hostname: config.local.hostname,
			browsers: config.local.browsers
		}, function (exitStatus) {
			$.util.log('Sortie Karma avec : ' + exitStatus);
			done(exitStatus ? "Il y a des tests en erreur !" : undefined);
		});
		karma.start();
	});


	/**
	 * Karma testing (PIC)
	 */
	gulp.task('test:pic', function (done) {
		var karma = new ServerKarma({
			configFile: __dirname + '/../karma.conf.js',
			singleRun: true,
			files: files,
			hostname: config.pic.hostname,
			browsers: config.pic.browsers,
			customLaunchers: config.pic.customLaunchers
		}, function (exitStatus) {
			$.util.log('Sortie Karma avec : ' + exitStatus);
			done(exitStatus ? "Il y a des tests en erreur !" : undefined);
		});
		karma.start();
	});

};
