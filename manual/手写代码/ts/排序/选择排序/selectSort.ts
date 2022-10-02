#!/usr/bin/env bun

/* 
每次选出最小的值
O(n2)
*/

const selectSort = <T>(arr: Array<T>) => {
  for (let i: number = 0; i < arr.length; i++) {
    let min = arr[i], index = i;
    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
}

const arr = [4, 2, 5, 3, 1];
selectSort(arr);
console.log(arr);