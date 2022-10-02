#!/usr/bin/env node

const insertSort = (a) => {
  if (!a) return;
  for (let i = 1; i < a.length; i++) {
    let key = a[i], j = i - 1;
    for (; j >= 0 && a[j] > key; j--) {
      a[j + 1] = a[j];
    }
    a[j + 1] = key;
  }
}

console.time('insertSort');
let arr = [];
for (let i = 0; i < 100; i++)
  arr.push(Math.round(Math.random() * 10));
insertSort(arr);
// console.log(arr);
console.timeEnd('insertSort');