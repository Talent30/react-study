const path = require('path');

module.exports = {

    entry: {
        index: './src/index.js',
        framework: ['react', 'react-dom','styled-components'],
    },

    output: {
        filename: 'js/[name].[contenthash:8].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
}
