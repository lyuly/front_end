#!/usr/bin/env bun

/* 
以步长h排序的插入排序
O(nlogn)
*/

const shellSort = <T>(arr: Array<T>) => {
 const n: number = arr.length;
 let h: number = 1;
 while (h < Math.floor(h / 3)) {
  h = h * 3 + 1;
 }
 while (h >= 1) {
  for (let i: number = h; i < n; i++) {
    for (let j: number = i; j >= h && arr[j - h] > arr[j]; j -= h) {
      [arr[j - h], arr[j]] = [arr[j], arr[j - h]];
    }
  }
  h = Math.floor(h / 3);
 }
}

const arr: number[] = [1, 9, 0, 2, 7, 4, 3, 6, 5, 8];
shellSort(arr);
console.log(arr);