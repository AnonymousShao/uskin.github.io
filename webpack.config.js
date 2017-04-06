const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoPrefixer = require('autoprefixer');

module.exports = {
  entry: ['./client/app/index.jsx'],
  output: {
    path: './client/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js|.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:['es2015', 'react']
      }
    }, {
      test: /\.less/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!less?sourceMap')
    }, {
      test: /\.md/,
      loader: 'markdown'
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
  postcss: {}
};
