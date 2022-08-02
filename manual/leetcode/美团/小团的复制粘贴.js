const fs = require('fs');
// 读取所有的输入
let lines = fs.readFileSync('./a.txt').toString().trim().split(/\r\n|\r|\n/);
// A/B的长度
const n = parseInt(lines[0]);
// A数组
const a = lines[1].split(' ').map(Number);
// 操作数
const count = parseInt(lines[2]);

let b = new Array(n).fill(-1);

// lines[3]开始为操作
for (let i = 0; i < count; i++) {
  const str = lines[i + 3].split(' ').map(Number);
  let x = str[0];
  if (x === 2) {
    console.log(b[str[1] - 1]);
  }
  if (x === 1) {
    let temp = [];
    for (let i = 0; i < str[1]; i++) {
      temp.push(a[i + str[2] - 1]);
    }
    b.splice(str[3] - 1, str[1], ...temp);
  }
}