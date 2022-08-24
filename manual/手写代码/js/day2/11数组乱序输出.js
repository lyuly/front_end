#!/usr/bin/env bun
/* 
数组乱序输出，借助Math.random()，洗牌策略
*/

function shuffleArray(array) {
  for (let index = 0; index < array.length; index++) {
    const element = Math.floor(Math.random() * (array.length - index));
    [arr[element], arr[index]] = [arr[index], arr[element]];
  }
}

const arr = [1, 2, 3, 4, 5];
shuffleArray(arr);
console.log(arr);