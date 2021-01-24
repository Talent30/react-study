const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'production',
  cache: {
    type: 'filesystem',
  },
  output: {
    filename: 'js/[name].[contenthash:8].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'thread-loader',
          'css-loader',
          'postcss-loader',
        ],

      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        polyfill: {
          test: /[\\/]node_modules[\\/](.*core-js.*|.*babel.*)[\\/]/,
          name: 'polyfill',
          chunks: 'all',
        },
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    // new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new RemovePlugin({
      before: {
        test: [
          {
            folder: 'dist',
            method: (absoluteItemPath) => new RegExp(/[.*]/).test(absoluteItemPath),
            recursive: true,
          },
        ],
      },
    }),
  ],
});
