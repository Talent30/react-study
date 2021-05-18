const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    hot: true,
    compress: true,
    port: 9000,
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
    }),
  ],
});
