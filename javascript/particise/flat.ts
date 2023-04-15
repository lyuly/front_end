#!/usr/bin/env bun

function flat<T>(arr: Array<T>) {
  let res: Array<T> = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flat(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

const a = [1, [2, [3, [4]]]];
console.log(flat(a));

function deDuplication<T>(arr: Array<T>) {
  return Array.from(new Set(arr));
}

const b = [1, 2, 1, 2, 3, 1];
console.log(deDuplication(b));

function partition<T>(arr: Array<T>, lo: number, hi: number) {
  let v = arr[lo], i = lo, j = hi + 1;

  while (true) {
    while (arr[++i] < v)  if (i === hi) break;
    while (v < arr[--j])  if (j === lo) break;
    if (i >= j)
      break;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[lo], arr[j]] = [arr[j], arr[lo]];
  return j;
}

function QuickSort<T>(arr: Array<T>, lo: number, hi: number) {
  if (lo >= hi) return

  const j = partition(arr, lo, hi);
  QuickSort(arr, lo, j - 1);
  QuickSort(arr, j + 1, hi);
}

const c = [5, 0, 2, 1, 3, 4];
QuickSort(c, 0, c.length - 1);
console.log(c);