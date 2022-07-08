const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 指定入口文件
  entry: './src/main.ts',
  
  // 指定输出文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  
  // 指定wenpack打包时要使用的模块
  module: {
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的lodaer
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      "chrome": '88'
                    },
                    // 指定corejs版本
                    "corejs": '3',
                    // 按需加载corejs
                    "useBuiltIns": 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'],
        // 要包括的文件夹
        include: path.resolve(__dirname, './src'),
      },
    ],
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true
  },
  
  resolve: {
    extensions: ['ts', '.js']
  },

  mode: 'development'
}