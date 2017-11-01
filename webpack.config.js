var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
   entry: {
      path: path.join(__dirname, 'src', 'index')
   },
   output: {
      path: path.join(__dirname, 'public/js'),
      filename: 'bundle.js'
   },
   module: {
      rules:[{
         test: /\.jsx/,
         exclude: /node_modules/,
         use: [{
            loader: 'babel-loader',
            options: {
               presets: [
                  'react', 'es2015', 'stage-0'
               ]
            }
         }]
      }]
   },
   resolve: {
      extensions: ['.js', '.jsx', '.css']
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.join(__dirname, 'src', 'index.html'),
         filename: path.join(__dirname, 'public', 'index.html')
      }),
      new CleanWebpackPlugin(['public'])
      /* new webpack.optimize.UglifyJsPlugin({
       comments: false,
       disable: true
       }),*/
   ]
};