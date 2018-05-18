var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'main.js': './src/index.js',
        'style.js': './src/style.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name]',
        library: 'Muxiui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        "vue-router":'VueRouter'
    },
    resolve: {
        extensions: ['.js', '.vue']
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
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        compress: false,
        port: 9000
    },
    devtool: 'source-map'
}
