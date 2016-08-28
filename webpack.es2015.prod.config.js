'use strict';
let BabiliPlugin = require("babili-webpack-plugin");
let path = require('path');

module.exports = {
  entry: {
    'car.es2015.prod': './app/car.ts'
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          configFileName: 'tsconfig.es2015.json'
        }
      }
    ]
  },

  plugins: [
    new BabiliPlugin()
  ],

  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.ts', '.js']
  },

  devtool: false
};
