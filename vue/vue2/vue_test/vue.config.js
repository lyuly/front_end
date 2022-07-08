module.exports = {
  pages: {
    index: {
      // 入口
      entry: 'src/main.js',
    },
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