module.exports = {
  entry: './client/app/index.jsx',
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
      loader: 'style!css!less'
    }, {
      test: /\.(gif|png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.css/,
      loader: 'style!css'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  devtool: 'source-map',
  watch: true
};
