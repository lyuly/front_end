#!/usr/bin/env bun
const parition = (a: number[], lo: number, hi: number): number => {
  let i: number = lo, j: number = hi + 1;
  let v: number = a[lo];
  while (true) {
    while (a[++i] < v)  if (i === hi) break;
    while (v < a[--j])  if (j === lo) break;
    if (i >= j)
      break;
    [a[i], a[j]] = [a[j], a[i]];
  }
  [a[lo], a[j]] = [a[j], a[lo]];
  return j;
}

const quickSort = (a: number[], lo: number, hi: number): number[] => {
  if (hi <= lo) return [];
  const j: number = parition(a, lo, hi);
  quickSort(a, lo, j - 1);
  quickSort(a, j + 1, hi);
  return a;
}

const arr = [1, 3, 2, 5, 4];
console.log(quickSort(arr, 0, arr.length - 1));