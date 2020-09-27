const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            cacheGroups: {
                framework: {
                    test: "framework",
                    name: "framework",
                    enforce: true
                },
                vendors: {
                    priority: -10,
                    test: /node_modules/,
                    name: "vendor",
                    enforce: true,
                },
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new CleanWebpackPlugin()
    ]

});
