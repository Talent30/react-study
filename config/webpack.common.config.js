const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

console.log('NODE_ENV:', process.env.NODE_ENV);

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.AutomaticPrefetchPlugin(),
    new StylelintPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      threads: true,
    }),
  ],
};
