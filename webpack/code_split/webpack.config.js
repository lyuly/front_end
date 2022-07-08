const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/main.js' // 只有一个入口文件，单入口
  entry: {  // 有多个入口文件，多入口
    app: './src/app.js',
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // webpack命名方式，[name]以文件名自己命名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    })
  ],
  devServer: {
    host: 'localhost',
    port: '9000',
    open: true
  },
  mode: 'production',
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: 'all',  // 对所有模块都进行分割
      // 修改配置
      cacheGroups: {
        // 组，哪个模块要打包到一个组
        // defaultVendors: { // 组名
        //  test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
        //  priority: -10, // 权重（越大越高）
        // reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
        // },
        default: {
          minSize: 0,
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};