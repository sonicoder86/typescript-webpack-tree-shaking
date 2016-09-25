'use strict';
let path = require('path');

module.exports = {
  entry: {
    'car': './app/car.ts'
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      { test: /\.ts$/, use: 'ts' }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: false
};
