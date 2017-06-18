const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './app/index.js'],
    },
    output: {
        path: `${path.resolve(__dirname, '.')}/dist`,
        publicPath: 'dist/',
        filename: 'index.js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread'],
                },
                exclude: [/node_modules/],
            },
            {
                test: /\.scss$/i, loader: ExtractTextPlugin.extract('style', 'css!sass'),
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ],
    resolve: {
        app: path.resolve(__dirname, './app'),
    },
    devtool: 'eval',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
};
