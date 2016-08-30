let config = require('./webpack.config.js')

config.entry = {
	'mui': './src/index.js',
}

config.output = {
  filename: './dist/mui.js',
  library: 'mui',
  libraryTarget: 'umd'
}

if (process.env.NODE_ENV === 'production'){
	delete config.devtool;
	config.output.filename = config.output.filename.replace(/\.js$/, '.min.js')

	config.plugins = [
	  new webpack.optimize.UglifyJsPlugin({
	    sourceMap: false,
	    drop_console: true,
	    compress: {
	        warnings: false
	    }
	 })
	]	
}

module.exports = config