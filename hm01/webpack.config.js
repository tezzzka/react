const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'static','build'),
        filename: 'bundle.js',
        publicPath: '/static/build/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname,'src'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        [
                            '@babel/preset-react', 
                            {
                                runtime: 'automatic',
                            },
                        ]
                    ]
                }
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname,'src'),
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
}