//webpack.config.js
//main webpack config
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    resolve: {
        fallback: path.join(__dirname, "node_modules"),
        modulesDirectories: [
            "app",
            "node_modules"
        ],
        extensions: ["", ".json", ".js", ".jsx"]
    },
    node:    {
        __dirname: true,
        fs: 'empty',
        tls: 'empty',
        net: 'empty',
        console: true
    },
    resolveLoader: {
        fallback: path.join(__dirname, "node_modules"),
        root: path.join(__dirname, "node_modules")
    },
    entry: {
        rehydrate: './app/rehydrate',
        frontPage: ['./app/pages/FrontPage'],
        mobileAppsPage: ['./app/pages/MobileAppsPage']

    },
    output: {
        path: 'dist',
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            chunks: ['rehydrate', 'frontPage', 'mobileAppsPage']
        })
    ],
    module : {
        loaders: [
            {include: /\.json$/, loaders: ["json-loader"]},
            {include: /\.jsx$/, loaders: ["babel-loader"], exclude: /node_modules/}
        ]
    }

};