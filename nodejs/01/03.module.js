/* 
  在node中，通过require()函数来引入外部的模块
  require引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块

  我们使用reqiure()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
  模块分为两大类
    核心模块
      - 由node引擎提供的模块
      - 核心模块的标识就是，模块的名字
    文件模块
      - 由用户自己创建的模块
      - 文件模块的标识就是文件的路径（绝对路径 相对路径）
          相对路径使用.或..开头
*/

var md = require('./02.module.js');
// console.log(md)

var math = require('./math');
// console.log(math.add(1,2));
let fs = require('fs');
console.log(fs);