#!/usr/bin/env bun

const bubbleSort = <T>(arr: Array<T>) => {
  for (let i: number = 0; i < arr.length; i++) {
    let flag: boolean = false;
    for (let j: number = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
}

const arr = [1, 5, 4, 2, 3];
bubbleSort(arr);
console.log(arr);