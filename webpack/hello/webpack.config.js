const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    index: './src/main.jsx',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProduction ? 'static/js/[name].[contenthash:10].js' : 'static/js/[name].js',
    assetModuleFilename: 'static/media/[hash:10][ext][query]',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:10].css',
      chunkFilename: 'static/css/[name].[contenthash].chunk.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: path.resolve(__dirname, 'dist') }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        use: 'file-loader'
      },
      // 解析ES6
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          isProduction ?  MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true
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