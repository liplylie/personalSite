const path = require('path');
var webpack = require('webpack');

const SRC_DIR = path.resolve(__dirname, 'client');
const BUILD_DIR = path.resolve(__dirname, 'client/static/');

module.exports = {
    entry: path.resolve(SRC_DIR, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  cacheDirectory: true,
                  presets: ['es2015']
                }   
            },
            { 
                test: /\.(html|css)$/, 
                loader: 'html-loader',
                exclude: /\.async\.(html|css)$/
            }
        ]
    }
}