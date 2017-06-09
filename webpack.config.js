const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: './app/client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                use: 'babel-loader'
            },
            { 
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}