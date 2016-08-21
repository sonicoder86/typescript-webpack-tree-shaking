'use strict';
let webpack = require('webpack');
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
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.ts', '.js']
  },

  devtool: false
};
