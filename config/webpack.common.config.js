const path = require('path');
const webpack = require('webpack');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  entry: {
    index: './src/index.jsx',
    // framework: ['react', 'react-dom', 'styled-components'],
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
    /* new ESLintPlugin({
      files: 'src/*',
      threads: true,
    }), */
  ],
};
