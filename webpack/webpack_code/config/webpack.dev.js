const os = require('os');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const threads = os.cpus().length; // 获取cpu的核数

module.exports = {
  // 入口
  entry: './src/main.js', // 相对路径
  // 输出
  output: {
    // 所有文件的输出路径
    // 开发模式没有输出
    path: undefined,
    // 文件名
    filename: 'static/js/[name].js',
    // 打包输出的其他文件命名
    chunkFilename: 'static/js/[name].chunk.js',
    // 图片、字体等通过type:asset处理资源命名方式
    assetModuleFilename: 'static/media/[hash:10][ext][query]',
  },
  // 加载器
  module: {
    rules: [
      // loader的配置
      {
        // 每个文件只能被其中一个loader配置处理
        oneOf: [
          { 
            test: /\.css$/,
            use: [
              // 执行顺序，从右到左（从下到上）
              'style-loader', // 将js中css通过创建style标签添加到html文件中生效
              'css-loader', // 将css资源编译成commonjs的模块到js中
            ],
          }, // 只检测.css文件
          {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader'], // 使用多个loader
          },
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'stylus-loader'],
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
            //   // 输出图片名称
            //   // [hash:10] hash值取前10位
            //   filename: 'static/images/[hash:10][ext][query]',
            // },
          },
          {
            test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
            type: 'asset/resource',
            // generator: {
            //   // 输出图片名称
            //   // [hash:10] hash值取前10位
            //   filename: 'static/media/[hash:10][ext][query]',
            // },
          },
          {
            test: /\.js$/,
            // exclude: /node_modules/,  // 排除node_modules中的js文件
            include: path.resolve(__dirname, '../src'), // 只处理src下的文件，其他不处理
            use: [
              {
                loader: 'thread-loader', // 开启多进程
                options: {
                  works: threads, // 进程数量
                },
              },
              {
                loader: 'babel-loader',
                options: {
                cacheDirectory: true, // 开启babel缓存
                cacheCompression: false,  // 关闭缓存文件压缩
              },
            },
            ],
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
      exclude: 'node_modules', // 默认值
      threads, // 开启多进程和设置进程数量
    }),
    new HtmlWebpackPlugin({
      // 模板：以public/index.html文件创建新的html文件
      // 新的html文件特点：1.结构和原理一致 2.自动引入打包输出的资源
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
  // 开发服务器 内存中编译打包，不会输出资源
  devServer: {
    host: 'localhost',  // 启动服务器域名
    port: '4000', // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR
  },
  // 模式
  mode: 'development',
  devtool: 'cheap-module-source-map',
};