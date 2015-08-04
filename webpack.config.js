var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'eval',
  // debug: true,
  entry: {
    main: path.join(__dirname, 'src/main.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!cssnext-loader'
        ),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};