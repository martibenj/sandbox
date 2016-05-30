'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var pkg = require('./package.json');

var options = {
	src: './apps/nta/',
	dist: './dist',
	e2eTests: './e2e-tests',
	reports: './reports',
	pkg: pkg,
	envs: {
		defaut: {
			proxy: {
				forward: {
					'/bookstore/rs/series': 'http://129.183.100.233:8080/'
				}
			}
		},
		tuu: {
			proxy: {
				forward: {
					'/api': 'http://localhost:8082/',
					'/albums': 'http://localhost:8082/',
					'/auteurs': 'http://localhost:8082/'
				}
			}
		}
	}
};

wrench.readdirSyncRecursive('./outillage').filter(function (file) {
	return (/\.(js)$/i).test(file);
}).map(function (file) {
	require('./outillage/' + file)(options);
});


/**
 * Tâche par défaut
 * - Exécution de la tâche de vérification de la qualité du code.
 */
gulp.task('default', ['quality']);
