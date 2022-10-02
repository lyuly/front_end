#!/usr/bin/env bun

/* 
归并排序
O(nlogn)
稳定排序
*/

const merge = <T>(left: Array<T>, right: Array<T>) => {
  const res: Array<T> = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift()!);
    } else {
      res.push(right.shift()!);
    }
  }
  while (left.length) {
    res.push(left.shift()!);
  }
  while (right.length) {
    res.push(right.shift()!);
  }
  return res;
}

const mergeSort = <T>(arr: Array<T>): Array<T> => {
  const len: number = arr.length;
  if (len < 2)
    return arr;
  let mid: number = len >> 1;
  const left: Array<T> = arr.slice(0, mid);
  const right: Array<T> = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const arr = [1, 5, 2, 4, 3];
console.log(mergeSort(arr));