/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const threadLoader = require('thread-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

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
  mode: 'development',
  name: 'client',
  target: 'web',
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&quiet=false&noInfo=false',
    path.resolve(process.cwd(), 'src/index.jsx')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
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
          { loader: 'file-loader', options: { name: '[path][name].[ext]' } }
        ]
      }
    ]
  },
  optimization: {
    noEmitOnErrors: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') },
      'typeof window': JSON.stringify('object')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'SustainaBin',
      filename: 'index.html',
      template: 'src/template.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
  serve: {
    content: path.join(process.cwd(), 'dist'),
    port: 8080
  }
};

module.exports = config;
