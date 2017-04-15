'use strict';

const path = require('path');

module.exports = {
  entry: {
    'car': './app/car.ts'
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      { test: /\.ts$/, use: 'awesome-typescript-loader' }
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
