
module.exports = {
  // 继承 Eslint 规则
  extends: ['eslint:recommended'],
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  // 解析选项
  parserOptions: {
    ecmaVersion: 6, // es6
    sourceType: 'module', // es module
  },
  // 具体检查选项
  rules: {
    'no-var': 2,  // 不能使用 var 定义变量
  },
  plugin: ['import'], // 解决动态导入语法报错
  // 继承
  extends: [],
};
