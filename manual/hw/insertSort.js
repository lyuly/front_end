#!/usr/bin/env node

const insertSort = (arr) => {
  if (!arr) return;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

const arr = [1, 4, 5, 3, 2];
insertSort(arr);
console.log(arr);

const bubbleSort = (arr) => {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0 ; j < arr.length - 1 - i; j++) {
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

bubbleSort(arr);
console.log(arr);