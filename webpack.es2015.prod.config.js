'use strict';

let BabiliPlugin = require("babili-webpack-plugin");
let path = require('path');

module.exports = {
  entry: {
    'car.es2015.prod': './app/car.ts'
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader?configFileName=tsconfig.es2015.json'
      }
    ]
  },

  plugins: [
    new BabiliPlugin()
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: false
};
