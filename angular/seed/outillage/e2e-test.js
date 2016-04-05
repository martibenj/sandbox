'use strict';

var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;


module.exports = function (options) {

	// Configuration des tests e2e pour les profils local et PIC
	var config = {
		files: [options.e2eTests + '/**/*_test.js'],
		local: {
			baseUrl: 'http://localhost:8888/',
            directConnect: true
		},
		pic: {
			baseUrl: 'http://pn009-apf2-w0et004.sii24.pole-emploi.intra:10041/app-ex-simple-fabrication/',
			seleniumAddress: 'http://swzksd.sii24.pole-emploi.intra:4444/wd/hub/'
		}
	};

	gulp.task('webdriverUpdate', require("gulp-protractor").webdriver_update);

	/**
	 * Tâche de tests e2e :
	 * - Execute tous les tests e2e présents dans le répertoire e2e-tests
	 */
	gulp.task('e2e', function () {
		launchProtractor(config.local.baseUrl, null, config.local.directConnect);
	});

	/**
	 * Tâche de tests e2e pour la PIC :
	 * - Execute tous les tests e2e présents dans le répertoire e2e-tests
	 */
	gulp.task('e2e:pic', function () {
		return launchProtractor(config.pic.baseUrl, config.pic.seleniumAddress)
	});


	/**
	 * Lance les tests protractor.
	 * @param baseUrl L'url de l'application à tester
	 * @param seleniumAddress L'url du hub Selenium. Si l'url n'est pas défini, un hub sera lancé en local.
	 * @param directConnect Un booléen. Si true, le driver du browser (uniquement Chrome ou Firefox) est utilisé directement sans passer par le hub selenium
     */
    function launchProtractor(baseUrl, seleniumAddress, directConnect) {
        var args = ['--baseUrl', baseUrl];
        if (undefined !== seleniumAddress && null !== seleniumAddress) {
            args.push('--seleniumAddress', seleniumAddress);
        }
        if (undefined !== directConnect && null !== directConnect) {
            args.push('--directConnect', directConnect);
        }

		return gulp.src(config.files)
			.pipe(protractor({
				configFile: __dirname + '/../protractor.conf.js',
				args: args
			}))
			.on('error', function (e) {
				throw e;
			})
	}
};
