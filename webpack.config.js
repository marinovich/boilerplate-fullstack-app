const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
}