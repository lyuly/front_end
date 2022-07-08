const os = require('os');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require("svgo");
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const threads = os.cpus().length; // 获取cpu核数

// 用来获取处理样式的loader
function getStyleLoader(pre) {
  return [
    // 执行顺序，从右到左（从下到上）
    MiniCssExtractPlugin.loader, // 将js中css通过创建style标签添加到html文件中生效
    'css-loader', // 将css资源编译成commonjs的模块到js中
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'postcss-preset-env', // 能解决大多数样式兼容性问题
            ],
          ],
        },
      },
    },
    pre,
  ].filter(Boolean);
}

module.exports = {
  // 入口
  entry: './src/main.js', // 相对路径
  // 输出
  output: {
    // 所有文件的输出路径
    // __dirname nodejs的变量，代表当前文件的文件夹目录
    path: path.resolve(__dirname, '../dist'), // 绝对路径
    // 文件名
    filename: 'static/js/[name].js',
    // 打包输出的其他文件命名
    chunkFilename: 'static/js/[name].chunk.js',
    // 图片、字体等通过type:asset处理资源命名方式
    assetModuleFilename: 'static/media/[hash:10][ext][query]',
    // 自动清空上次打包的内容
    // 在打包前将path整个目录清空，再进行打包
    clean: true,
  },
  // 加载器
  module: {
    rules: [
      // loader的配置
      {
        oneOf: [
          { 
            test: /\.css$/,
            use: getStyleLoader(),
          }, // 只检测.css文件
          {
            test: /\.less$/i,
            use: getStyleLoader('less-loader'),
          },
          {
            test: /\.s[ac]ss$/i,
            use: getStyleLoader('sass-loader'),
          },
          {
            test: /\.styl$/,
            use: getStyleLoader('stylus-loader'),
          },
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                // 小于10kb的图片转base64
                // 优点：减少请求数量 缺点：体积会更大
                maxSize: 10 * 1024,  // 4kb
              },
            },
            // generator: {
              // 输出图片名称
              // [hash:10] hash值取前10位
              // filename: 'static/images/[hash:10][ext][query]',
            // },
          },
          {
            test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
            type: 'asset/resource',
            // generator: {
              // 输出图片名称
              // [hash:10] hash值取前10位
              // filename: 'static/media/[hash:10][ext][query]',
            // },
          },
          {
            test: /\.js$/,
            // exclude: /node_modules/,  // 排除node_modules中的js文件
            include: path.resolve(__dirname, '../src'), // 只处理src下的文件，其他不处理
            use: [
              {
                loader: 'thread-loader',  // 开启多进程
                options: {
                  works: threads, // 进程数量
                },
              },
              {
                loader: 'babel-loader',
                options: {
                cacheDirectory: true, // 开启babel缓存
                cacheCompression: false,  // 关闭缓存文件压缩
                plugins: ['@babel/plugin-transform-runtime'] // 减少代码体积
              },
            },
            ]
          },
        ],
      }
    ],
  },
  // 插件
  plugins: [
    // plugin的配置
    new ESLintPlugin({
      // 检测src下面的文件
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true, // 开启缓存
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/eslintcache'),
      threads,  // 开启多进程和设置进程数量
    }),
    new HtmlWebpackPlugin({
      // 模板：以public/index.html文件创建新的html文件
      // 新的html文件特点：1.结构和原理一致 2.自动引入打包输出的资源
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].chunk.css',
    }),
//    new CssMinimizerPlugin(),
//    new TerserWebpackPlugin({
//      parallel: threads,  // 开启多进程和设置进程数量
//    })
    new PreloadWebpackPlugin({
      // rel: 'preload',
      // as: 'script',
      rel: 'prefetch',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  optimization: {
    // 压缩的操作
    minimizer: [
      // 压缩css
      new CssMinimizerPlugin(),
      // 压缩js
      new TerserWebpackPlugin({
      parallel: threads,  // 开启多进程和设置进程数量
    }),
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
    // 代码分割配置
    splitChunks: {
      chunks: 'all',
      // 其他都用默认值
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
  // 模式
  mode: 'production',
  devtool: 'source-map',
};
