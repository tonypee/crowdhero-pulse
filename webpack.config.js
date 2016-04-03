var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var loader = require('babel-loader');
var WebpackNotifierPlugin = require('webpack-notifier');

// config

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'public/scripts/app.js'
  },
  devtool: 'source-map',
  module: {
	  loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
			{
				test: /\.js(x?)$/,
        exclude: /(node_modules|bower_components)/,
				loader: 'babel',
        query: {
          plugins: [["transform-decorators-legacy"]],
          presets: ['react', 'es2015', 'stage-1']
        }
			}
		]
	},
  plugins: [
    new WebpackNotifierPlugin()
  ],
  externals: {
    "firebase": "Firebase",
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter"
  }
};
