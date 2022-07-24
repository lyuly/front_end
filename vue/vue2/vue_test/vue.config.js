const path = require('path')

function resolve(dir) {
  path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      // 入口
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // 开启代理服务器
  /* devServer:{
    proxy: 'htpp://localhost:5000'
  } */
  // 开启代理服务器（方式二）
  devServer:{
    proxy:{
      '/atguigu':{
        target: '<url>',
        pathRewrite:{'^/atguigu':''},
        ws: true,
        changeOrigin: true  // 用于控制请求头中的host值
      }
    }
  }
}