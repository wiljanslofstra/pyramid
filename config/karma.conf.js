const argv = require('yargs').argv;
const config = require('../config');
const webpackConfig = require('./webpack.config')('test');

const karmaConfig = {
  basePath: '../', // project root in relation to bin/karma.js
  files: [
    {
      pattern: `./${config.dir_test}/test-bundler.js`,
      watched: false,
      served: true,
      included: true,
    },
  ],
  singleRun: !argv.watch,
  frameworks: ['mocha'],
  reporters: ['mocha'],
  preprocessors: {
    [`${config.dir_test}/test-bundler.js`]: ['webpack'],
  },
  browsers: ['PhantomJS'],
  webpack: {
    devtool: 'cheap-module-source-map',
    resolve: Object.assign({}, webpackConfig.resolve, {
      alias: Object.assign({}, webpackConfig.resolve.alias, {
        sinon: 'sinon/pkg/sinon.js',
      }),
    }),
    plugins: webpackConfig.plugins,
    module: {
      noParse: [
        /\/sinon\.js/,
      ],
      rules: webpackConfig.module.rules.concat([
        {
          test: /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
          loader: 'imports-loader?define=>false,require=>false',
        },
      ]),
    },
    // Enzyme fix, see:
    // https://github.com/airbnb/enzyme/issues/47
    externals: Object.assign({}, webpackConfig.externals, {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': 'window',
    }),
  },
  // Webpack please don't spam the console when running in karma!
  webpackMiddleware: {
    // webpack-dev-middleware configuration
    // i.e.
    noInfo: true,
    // and use stats to turn off verbose output
    stats: {
      // options i.e.
      chunks: false
    }
  },
  coverageReporter: {
    reporters: config.coverage_reporters,
  },
};

if (config.globals.__COVERAGE__) { // eslint-disable-line
  karmaConfig.reporters.push('coverage');

  karmaConfig.webpack.module.rules.push({
    enforce: 'pre',
    test: /\.(js|jsx)$/,
    include: new RegExp(config.dir_client),
    loader: 'babel-loader',
    query: Object.assign({}, config.compiler_babel, {
      plugins: (config.compiler_babel.plugins || []).concat('istanbul'),
    }),
  });
}

module.exports = cfg => cfg.set(karmaConfig);
