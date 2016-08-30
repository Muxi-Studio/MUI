const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: './docs/index.js',
	output: {
		publicPath: '/build',
		path: './build',
		filename: 'mui-docs.js'
	},
	resolve: {
    	root: path.resolve('./')
  	},

  	module: {
  		loaders: [
  			{
  				test: /\.vue$/ , 
  				loader: 'vue'
  			},
  			{
  				test: /\.js$/,
  				exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      			loader: 'babel'
  			},
  			{
  				test: /\.scss$/,
  				loader: 'style!css!sass'
  			}
  		]
  	},
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
  	devtool: 'source-map'
}


if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}