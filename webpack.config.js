const webpack = require('webpack');
const project = require('./webpack/config');

module.exports = {

    devtool: false,

    entry: {
        app: [project.paths.src('Genoa.js')]
    },

    output: {
        path: project.paths.dist(),
        filename: 'Genoa.js',
        libraryTarget: "commonjs2"
    },

    target: 'web',

    node: {
        fs: "empty",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin(project.globals),

        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],

    externals: {
        'react': 'commonjs react'
    }
};