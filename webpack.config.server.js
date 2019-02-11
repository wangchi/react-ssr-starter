const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.base.config');

const serverConfig = {
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'bundle.js'
  },
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
};

module.exports = webpackMerge(config, serverConfig);
