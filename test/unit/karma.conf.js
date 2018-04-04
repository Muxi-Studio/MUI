var webpack = require('webpack')
var webpackConf = require("../../webpack.test.config.js")

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            './index.js'
        ],
        exclude: [],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sinon-chai',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-coverage'
        ],
        reporters: ['spec', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        webpack: webpackConf,
        client: {
            mocha: {
                timeout: 4000
            }
        }
    })
}