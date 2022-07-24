const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: "./src/index.js",
  output: {
    // 虚拟打包路径，就是说文件夹不会真正生成，而是在8080端口虚拟生成
    publicPath: '/xuni/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    hot: true,
    // 静态资源文件夹
    static: 'public'
  },
  mode: isProduction ? 'production' : 'development'
}