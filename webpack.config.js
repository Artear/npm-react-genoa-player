const webpack = require('webpack');
const project = require('./webpack/config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let ExtractCommon = new ExtractTextPlugin(`Genoa.css`);

module.exports = {

    devtool: false,

    entry: {
        app: [project.paths.src('Genoa.js')]
    },

    output: {
        path: project.paths.dist(),
        filename: 'Genoa.js'
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
            },
            {
                test: /Genoa\.scss$/,
                include: project.paths.src(),
                use: ExtractCommon.extract([
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ])
            }
        ]
    },

    plugins: [
        ExtractCommon,
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
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};