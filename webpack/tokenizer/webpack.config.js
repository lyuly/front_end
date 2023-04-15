const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    index: './src/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProduction ? '[name].[contenthash:10].js' : '[name].js',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssPlugin({
      filename: '[name].[contenthash:10].css',
      chunkFilename: '[name].[contenthash:10].chunk.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          isProduction ? MiniCssPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {},
          mangle: true
        }
      })
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: false
}