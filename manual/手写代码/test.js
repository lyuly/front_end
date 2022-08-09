#!/usr/bin/env node

// 两个数之间的随机数，>=min，<max
function randomD(a, b) {
  let max = a > b ? a : b;
  let min = a < b ? a : b;
  return Math.random() * (max - min) + min;
}

// 随机整数
function randomInt(a, b) {
  let max = a > b ? a : b;
  let min = a < b ? a : b;
  return Math.floor(Math.random() * (max - min) + min);
}

// 随机整数，包括a和b
function randomIntI(a, b) {
  let max = a > b ? a : b;
  let min = a < b ? a : b;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomD(2, 8));
console.log(randomInt(2, 8));
console.log(randomIntI(8, 2));