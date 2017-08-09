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
        filename: 'index_bundle.js',
        sourceMapFilename: '[file].map'
    },
    module: {
        rules: [
            /**
             * Extract and compile js and jsx files to external js file
             */
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
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
    plugins: [
        HtmlWebpackPluginConfig
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    }
}

