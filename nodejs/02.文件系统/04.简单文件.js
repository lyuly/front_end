/* 
  简单文件写入
  fs.writeFile(file, data[, options], callback)
  fs.writeFileSync(file, data[, options])
    - file 要操作的文件的路径
    - data 要写入的数据
    - options 选项，可以对写入进行一些设置
    - callback 当写入完成以后执行的函数
*/

// 引入fs模块
var fs = require('fs');

fs.writeFile('02.文件系统/hello3.txt', '这是通过writeFile写入的文件', function (err) {
  if (!err) {
    console.log('写入成功');
  } else {
    console.log(err);
  }
});