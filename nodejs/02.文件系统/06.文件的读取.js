/* 
  1.同步文件的读取
  2.异步文件的读取
  3.简单文件的读取
    fs.readFile(path[, options], callback)
    fs.readFileSync(path[, options])
      - path 要读取的文件的路径
      - options 读取的选项
      - callback 回调函数，通过回调函数将读取到的内容返回(err, data)
          err 错误对象
          data 读取到的数据，会返回一个Buffer
  4.流式文件读取
*/

var fs = require('fs');

let path = '02.文件系统/2022-04-04.jpg';

fs.readFile(path, function (err, data) {
  if (!err) {
    console.log('成功读取');
    fs.writeFile('picture.jpg', data, function (err) {
        if (!err) {
          console.log('文件写入成功');
        } else
          console.log('文件写入失败');
    })
  }
  else
    console.log('读取失败');
})