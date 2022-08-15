#!/usr/bin/env node
let arr = [5, 2, 1, 4, 3];

const insertSort = (a) => {
  if (!a) return;
  for (let i = 1; i < a.length; i++) {
    let key = a[i], j = i - 1;
    for (; j >= 0 && a[j] > key; j--) {
      a[j + 1] = a[j];
    }
    a[j + 1] = key;
  }
  return a;
}

console.log(insertSort(arr));