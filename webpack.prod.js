const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: './app/client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
        sourceMapFilename: 'index_bundle.map'
    },
    module: {
        rules: [
            /**
             * Extract and compile js and jsx files to external js file
             */
            { 
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            /**
             * Extract and compile css files to external CSS file
             */
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            },
            /**
             * Extract and compile scss files to external CSS file
             */
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader']
            },
            /**
             * Raw loader support for *.html
             */
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: ['./app/client/index.html']
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(), //dedupe similar code 
        new webpack.optimize.UglifyJsPlugin(), //minify everything
        new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
    ]
}