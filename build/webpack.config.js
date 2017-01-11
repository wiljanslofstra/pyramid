const webpack = require('webpack');
const config = require('../config');

const paths = config.utils_paths;

module.exports = function(env) {
  const webpackConfig = {
    name: 'client',
    target: 'web',
    devtool: (env === 'development') ? 'eval-source-maps' : 'sourcemaps',
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
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
  ];

  if (env === 'production') {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    }));
  }

  // ------------------------------------
  // Loaders
  // ------------------------------------
  // JavaScript / JSON
  webpackConfig.module.loaders = [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: config.compiler_babel,
  }];
  /* eslint-enable */

  return webpackConfig;
};

