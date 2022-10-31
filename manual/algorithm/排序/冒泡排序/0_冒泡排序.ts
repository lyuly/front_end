#!/usr/bin/env bun
/* 
1.比较相邻元素，第一个比第二个大，就交换
2.互相交换直到最后
3.第i次交换需要比较0~arr.length - 1 - i个数

*/

import randomArr from "../../randomArr";

const bubbleSort = (arr: number[]) => {
  for (let i: number = 0; i < arr.length; i++) {
    let flag = false;
    for (let j: number = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
};

console.time("bubbleSort");
const arr = randomArr(10);
console.log(bubbleSort(arr));
console.timeEnd("bubbleSort");
