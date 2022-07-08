const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true
  },
  transpileDependencies: true
})
