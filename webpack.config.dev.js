var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

console.log('fk');
// webpack.config.js
module.exports = {
  devtool: 'eval',
  entry:
    [
    'webpack-dev-server/client?http://0.0.0.0:9002',
    'webpack/hot/only-dev-server', 
    './index.jsx'
    ]
  ,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //loader: 'babel',
        loaders: ['react-hot', 'babel'],
        include: __dirname,
        exclude: /node_modules/
        //query: {
        //    presets: ['react', 'es2015']
        //}
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('app.css', {
          allChunks: true
      }),
      new webpack.HotModuleReplacementPlugin()
  ]
  
};