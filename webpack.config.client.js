const path = require('path');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.base.config.js');

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: './',
    filename: 'index.js'
  },
  mode: 'development'
}

module.exports = webpackMerge(config, clientConfig);
