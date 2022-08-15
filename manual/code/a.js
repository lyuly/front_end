#!/usr/bin/env node

/* 
小美的魔法桶
7
优先队列 每次补最小的
*/

console.time('first');

const fs = require('fs');
const lines = fs.readFileSync('a.txt', 'utf-8').toString().split(/\r\n|\r|\n/);

const [n, m] = lines[0].split(' ').map(Number);
const arr = lines[1].split(' ').map(Number);

let q = [];

for (let i = 0; i < n; i++) {
  q.push(arr[i]);
}

q.sort((a, b) => b - a);

for (let i = 0; i < m; i++) {
  let t = q.pop();
  t++;
  q.push(t);
  q.sort((a, b) => b - a);
}

console.log(q[q.length - 1]);

console.timeEnd('first');