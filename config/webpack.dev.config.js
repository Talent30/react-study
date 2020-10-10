const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/[name].js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        port: 9000,
        compress: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});