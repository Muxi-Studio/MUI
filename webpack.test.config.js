var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'main.js': './src/index.js',
        'style.js': './src/style.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                }
            },
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url?limit=8192'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                coverageReporter: {
                    dir: './coverage',
                    reporters: [{
                            type: 'lcov',
                            subdir: '.'
                        },
                        {
                            type: 'text-summary'
                        }
                    ]
                },
                webpackMiddleware: {
                    stats: "errors-only"
                }
            }
          })
    ],
    devtool: 'source-map'
}
