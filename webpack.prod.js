/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const DupCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const threadLoader = require('thread-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env;

const workerPoolJs = {
  workers: +env.threads,
  workerParallelJobs: 4,
  poolTimeout: env.watch ? Infinity : 2000
};

const workerPoolCss = {
  workers: +env.threads,
  workerParallelJobs: 2,
  poolTimeout: env.watch ? Infinity : 2000
};

const multiThread = +env.threads > 0;

if (multiThread) {
  threadLoader.warmup(workerPoolJs, ['babel-loader', 'babel-preset-env']);
  threadLoader.warmup(workerPoolCss, ['css-loader']);
}

const config = {
  mode: 'production',
  name: 'client',
  target: 'web',
  devtool: 'nosources-source-map',
  entry: path.resolve(process.cwd(), 'src/index.jsx'),
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'dist/static'),
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    alias: { invariant: 'fbjs/lib/invariant' }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        include: path.resolve(process.cwd(), 'src'),
        use: [
          'cache-loader',
          multiThread && { loader: 'thread-loader', options: workerPoolJs },
          { loader: 'babel-loader', options: { cacheDirectory: true } }
        ].filter(Boolean)
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.resolve(process.cwd(), 'src/assets'),
        use: [
          { loader: 'file-loader', options: { name: '[hash].[ext]' } },
          'img-loader'
        ]
      }
    ]
  },
  performance: { assetFilter: assetFilename => assetFilename.endsWith('.js') },
  optimization: {
    noEmitOnErrors: true,
    concatenateModules: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: 4,
        uglifyOptions: {
          ecma: 8,
          warnings: false,
          toplevel: true,
          compress: { hoist_funs: true },
          output: { comments: false, beautify: false }
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
      'typeof window': JSON.stringify('object'),
      'typeof document': JSON.stringify('object'),
      'typeof window.navigator': JSON.stringify('object'),
      'window.navigator.product': JSON.stringify('Gecko'),
      'typeof __REACT_DEVTOOLS_GLOBAL_HOOK__': JSON.stringify('undefined'),
      'module.hot': false
    }),
    new webpack.LoaderOptionsPlugin({ debug: false }),
    new webpack.HashedModuleIdsPlugin(),
    new DupCheckerPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      title: 'SustainaBin',
      filename: '../index.html'
    })
  ]
};

module.exports = config;
