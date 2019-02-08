const path = require('path');

module.exports = {
  entry: './client.js',
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
