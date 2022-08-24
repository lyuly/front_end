#!/usr/bin/env bun
// 数组乱序，洗牌策略
function shuffleArray(arr) {
  if (arr.length === 0 || !arr)
    return arr;
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(Math.random() * (arr.length - i)) + i;
    console.log(index);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
  return arr;
}

// const arr = [1, 2, 3, 4, 5];
// console.log(shuffleArray(arr));