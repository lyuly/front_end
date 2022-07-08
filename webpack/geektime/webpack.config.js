"use strict"
const path = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const getStyleLoaders = (pre) => {
  return [
    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugin: ['postcss-preset-env'],
        },
      },
    },
    pre && {
      loader: pre,
      options: pre === 'less-loader' ? {
        lessOptions: {
          modifyVars: {'@primary-color': '#1DA57A'},
          javascriptEnabled: true,
        },
      } : {},
    },
  ].filter(Boolean);
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: isProduction ? path.resolve(__dirname, 'dist') : undefined,
    filename: isProduction ? 'static/js/[name].[contenthash:10].js' : 'static/js/[name].js',
    chunkFilename: isProduction ? 'static/js/[name].[contenthash:10].chunk.js' : 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[hash:10][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders('sass-loader'),
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders('stylus-loader'),
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      // 处理其他资源
      {
        test: /\.(woff2?|tff)/,
        type: 'asset/resource',
      },
      // 处理js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          plugins: [
            !isProduction && 'react-refresh/babel',
          ].filter(Boolean),
        },
      },
    ],
  },
  plugins: [
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, 'src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, 'node_modules/.cache/.eslintcache'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:10].css',
        chunkFilename: 'static/css/[name].[contenthash:10].chunk.css',
      }),
    isProduction &&
      new CopyPlugin({
        patterns: [
          {from: path.resolve(__dirname, './public'), to: path.resolve(__dirname, "./dist"),
            globOptions: {
              dot: true,
              gitignore: true,
              // 忽略index.html文件
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
      !isProduction && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // react react-dom react-router-dom 一起打包为一个js文件
        react: {
          test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
          name: 'chunk-react',
          priority: 40,
        },
        // 剩下node_modules单独打包
        libs: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-libs',
          priority: 20,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    },
    minimize: isProduction,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    'preset-default',
                    'prefixIds',
                    {
                      name: 'sortAttrs',
                      params: {
                        xmlnsOrder: 'alphabetical',
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  devServer: {
    host: 'localhost',
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  performance: false
}