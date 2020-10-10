const path = require('path');
const WebpackBar = require('webpackbar');

module.exports = {
    entry: {
        index: './src/index.js',
        framework: ['react', 'react-dom', 'styled-components'],
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new WebpackBar()
    ]
}
