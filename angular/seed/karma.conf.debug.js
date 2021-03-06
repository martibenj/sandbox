'use strict';

module.exports = function (config) {

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// web server port
		port: 9876,

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// Liste des plugins utilisables
		plugins: [
			'karma-phantomjs2-launcher',
			'karma-jasmine',
			'karma-coverage',
			'karma-junit-reporter'
		],

		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-route/angular-route.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'app/**/*.js'
		],

	// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'src/**/!(*_test).js': ['coverage']
		},

		// test results reporter to use
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'junit', 'coverage'],

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS2'],

		junitReporter: {
			outputFile: 'reports/junit/TESTS-xunit.xml'
		},

		coverageReporter: {
			type: 'lcov',
			dir: 'reports',
			subdir: 'coverage'
		}
	});
};
