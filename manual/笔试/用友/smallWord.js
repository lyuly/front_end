/* 
字符串缩减
*/

const fs = require('fs');
const lines = fs.readFileSync('c.txt').toString();
const obj = JSON.parse(lines);
let map = new Map();

for (let item of obj) {
    let len = item.length;
    if (map.has(item)) {
      
    }
}