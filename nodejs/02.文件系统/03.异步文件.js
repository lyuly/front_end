/* 
  异步文件写入
  fs.open(path, flags[, mode], callback)
    - 用来打开一个文件
    - 异步调用的放，结果都是通过回调函数的参数返回的
    - 回调函数两个参数：
      err 错误对象 如果没有错误则为null
      fd 文件的描述符
    
  fs.write(fd, string[, position[, encoding]], callback)
    - 用来异步写入一个文件

  fd.close(fd, callback)

*/

// 引入fs模块
var fs = require("fs");

// 打开文件
fs.open('hello.txt', 'w', function (err, fd) {
  // 判断是否出错
  if (!err) {
    // console.log(fd);
    // 如果没有出错，则对文件进行写入操作
    fs.write(fd, '这是写入异步的内容', function (err) {
      if (!err) {
        console.log('写入成功');
      }
      // 关闭文件
      fs.close(fd, function (err) {
        if (!err)
          console.log("文件已关闭");
      });
    });
  }else {
    console.log(err);
  }
});