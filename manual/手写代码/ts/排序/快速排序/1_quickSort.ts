#!/usr/bin/env bun

/* 
获取基准，分区
最好，评价O(nlogn)
最坏O(n2)
*/

const partition = <T>(arr: Array<T>, lo: number, hi: number): number => {
  let i: number = lo, j: number = hi + 1;
  let v: T = arr[lo];
  while (true) {
    while (v > arr[++i])  if (i === hi) break;
    while (v < arr[--j]) if (j === lo)  break;
    if (i >= j)
      break;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[lo], arr[j]] = [arr[j], arr[lo]];
  return j;
}

const quickSort = <T>(arr: Array<T>, lo: number, hi: number): void => {
  if (hi <= lo) return;
  const mid = partition(arr, lo, hi);
  quickSort(arr, lo, mid - 1);
  quickSort(arr, mid + 1, hi);
}

const arr = [1, 5, 4, 3, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr);