// Karma configuration
// Generated on Sun Jun 05 2016 19:52:28 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    './*.js',
      'src/*.js',
      'test/*.js',
      'test/*[Ss]pec.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: (function(){
      var browsers = [];
      if('chrome'){
        browsers.push('Chrome')
      }
      if(process.platform == 'darwin'){
        // mac
        browsers.push('Safari')
      }else if(process.platform == 'win32'){
        // win
        browsers.push('IE11');
        browsers.push('IE10');
        browsers.push('IE9');
        browsers.push('IE8');
        browsers.push('IE7');
      }

      return browsers;
    })(),

    customLaunchers: {
      IE11: {
        base: 'IE',
        'x-ua-compatible': 'IE=EmulateIE11'
      },
      IE10: {
        base: 'IE',
        'x-ua-compatible': 'IE=EmulateIE10'
      },
      IE9: {
        base: 'IE',
        'x-ua-compatible': 'IE=EmulateIE9'
      },
      IE8: {
        base: 'IE',
        'x-ua-compatible': 'IE=EmulateIE8'
      },
      IE7: {
        base: 'IE',
        'x-ua-compatible': 'IE=EmulateIE7'
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
