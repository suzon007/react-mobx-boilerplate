var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var loaders = require('./webpack.loaders');

module.exports = {
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/index.js' // App entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss', '.json']
	},
	module: {
		loaders: loaders
	},
	devServer: {
		contentBase: "./public",
			noInfo: true, //  --no-info option
			hot: true,
			inline: true
	},
	postcss: [autoprefixer]
};
