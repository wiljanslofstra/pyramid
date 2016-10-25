const webpack = require('webpack');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');
const debug = require('debug')('app:webpack:config');

const paths = config.utils_paths;
/* eslint-disable */
const __DEV__ = config.globals.__DEV__;
const __PROD__ = config.globals.__PROD__;
const __TEST__ = config.globals.__TEST__;
/* eslint-enable */

debug('Creating configuration.');

const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: paths.client(),
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {},
};

// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY = paths.client('main.js');

webpackConfig.entry = {
  app: [APP_ENTRY],
  vendor: config.compiler_vendors,
};

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].js`,
  path: paths.dist(),
  publicPath: config.compiler_public_path,
};

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false,
    },
  })
];

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: config.compiler_babel,
}, {
  test: /\.json$/,
  loader: 'json',
}, {
  test: /\.(png|jpg)$/,
  loader: 'url?limit=8192',
}];
/* eslint-enable */

module.exports = webpackConfig;
