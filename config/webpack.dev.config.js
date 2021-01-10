const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  cache: {
    type: 'memory',
  },
  output: {
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'thread-loader',
          'css-loader',
          'postcss-loader',
        ],

      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
