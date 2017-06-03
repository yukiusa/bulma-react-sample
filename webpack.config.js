var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

// Using -- ExtractTextPlugin enable setting
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "app.min.js",
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            // enable react
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                // and see .babelrc
            },
            // scss loader setting(using bulma loader)
            {
                test : /.css$/ ,
                loaders: [ 'style-loader' , 'css-loader' , 'sass-loader' ]
                // Using -- ExtractTextPlugin enable setting
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: ['css-loader?modules&importLoaders=2', 'sass-loader'],
                //     publicPath: "/dist"
                // }),
            }
        ],
    },

    // webpack-dev-server setting
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 8080,
    },
    // Enable extention .jsx
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // plugins setting
    plugins: debug ? [
        // Using -- ExtractTextPlugin enable setting
        // new ExtractTextPlugin({
        //     filename : "./css/app.scss",
        //     disable: false,
        //     allChunks: true
        // }),
    ]
    :
    [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};
