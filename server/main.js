const debug = require('debug')('app:server');
const webpack = require('webpack');
const webpackConfig = require('../build/webpack.config');
const config = require('../config');

const compiler = webpack(webpackConfig);

debug('Enable webpack');

compiler.watch({ // watch options:
  aggregateTimeout: 300, // wait so long for more changes
  poll: true // use polling instead of native watchers
}, (err, stats) => {
  if (err) {
    throw new Error(err);
  }

  console.log(stats.toString(webpackConfig.stats));
});
