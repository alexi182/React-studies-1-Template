var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CssSourcemapPlugin = require('css-sourcemaps-webpack-plugin');

module.exports = {
   entry: {
      path: path.join(__dirname, 'src', 'index')
   },
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      rules:[
         {
            test: /\.jsx/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
                  options: {
                     presets: ['react', 'es2015', 'stage-0'],
                     plugins: ['transform-decorators-legacy']
                  }
               }
            ]
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: "style-loader"
               },
               {
                  loader: "css-loader"
               }
            ]
         },
         {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: ['css-loader', 'sass-loader']
            })
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx', '.css']
   },
   devtool: 'source-map',
   plugins: [
      new HtmlWebpackPlugin({
         template: path.join(__dirname, 'src', 'index.html'),
         filename: path.join(__dirname, 'public', 'index.html')
      }),
      new ExtractTextPlugin('css/main.css'),
      new CleanWebpackPlugin(['public']),
      new webpack.ProvidePlugin({
         React: 'react',
         axios: 'axios',
         ReactDOM: 'react-dom',
         PropTypes: 'prop-types'
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new CssSourcemapPlugin()
      /* new webpack.optimize.UglifyJsPlugin({
       comments: false,
       disable: true
       }),*/
   ]
};

