#!/usr/bin/env bun
const fs = require('fs');
const lines = fs.readFileSync('评分.txt', 'utf-8').toString().split(/\r\n|\r|\n/);

lines.filter((element) => element !== '.');

const arr = lines[0].split(' ').map(Number);
let sum = 0;

let i = 1, count = 0

for (let item of arr) {
  sum += item * i++;
  count += item
}

let res = (Math.floor((sum / count * 10)) / 10).toString();
res = res.indexOf('.') > -1 ? res : res + '.0';
console.log(res);