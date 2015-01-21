var config = require( './build.config.js' );

module.exports = function ( karma ) {
    'use strict';
    karma.set( {

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: config.depFiles.concat( config.srcFiles ).concat( config.testFiles ),
        frameworks: [ 'jasmine' ],
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher'
        ],

        /**
         * How to report, by default.
         */
        reporters: ['dots', 'coverage'],

        preprocessors: {
            'src/!(*.spec)+(.js)': ['coverage']
        },

        coverageReporter: {
            type : 'html',
            dir : 'reporters/coverage/'
        },

        /**
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        port: 9020,
        runnerPort: 9100,
        urlRoot: '/',

        /**
         * Disable file watching by default.
         */
        autoWatch : false,
        singleRun : true,

        /**
         * The list of browsers to launch to test on. This includes only "Firefox" by
         * default, but other browser names include:
         * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
         *
         * Note that you can also use the executable name of the browser, like "chromium"
         * or "firefox", but that these vary based on your operating system.
         *
         * You may also leave this blank and manually navigate your browser to
         * http://localhost:9018/ when you're running tests. The window/tab can be left
         * open and the tests will automatically occur there during the build. This has
         * the aesthetic advantage of not launching a browser every time you save.
         */
        browsers: [ 'PhantomJS' ]
    } );
};

