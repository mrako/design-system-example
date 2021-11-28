const webpack = require('webpack');
const path = require('path');

const { merge } = require('webpack-merge');

const MinifyPlugin = require('babel-minify-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./webpack.config.base');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.ENDPOINT': JSON.stringify(process.env.ENDPOINT || 'http://0.0.0.0:9000/api'),
};

module.exports = merge(config, {
  mode: 'production',
  entry: {
    main: ['@babel/polyfill', path.join(__dirname, '../src/index.jsx')],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({ patterns: [
      { from: path.join(__dirname, '../src/public/images'), to: 'images' },
    ] }),
    new MinifyPlugin({}, { sourceMap: null }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
  ],
});
