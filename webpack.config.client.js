const path = require('path');
const webpackMerge = require('webpack-merge');
const clientConfig = require('./webpack.base.config.js');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: './',
    filename: 'index.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/react']
        }
      }
    ]
  }
};
