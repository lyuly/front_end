#!/usr/bin/env bun
/* 
小美的外卖省钱计划
*/

const fs = require('fs')
const lines = fs.readFileSync('b.txt', 'utf-8').toString().split(/\r\n|\r|\n/);

const n = parseInt(lines[0]);

let price = 0, money = 0

for (let i = 1; i <= n; i++) {
  const [x, y] = lines[i].split(' ').map(Number);
  if (x > y) {
    price += x;
    money += x - y;
  } else {
    price += y;
  }
}

console.log(`${price} ${money}`);