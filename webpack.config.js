/* global __dirname */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('dist/'),
    libraryTarget: 'umd',
    filename: 'react-jupyter.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  externals: [
    {
      react: {
        root: 'React',
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react'
      }
    }
  ],
  stats: {
    colors: true
  },
  resolve: {
  extensions: ['.js', '.jsx', '.json'],
  },
  devtool: 'source-map'
}
