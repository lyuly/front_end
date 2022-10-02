#!/usr/bin/env bun

/* 
时间复杂度O(n2)
*/

const insertSort = <T>(arr: Array<T>) => {
  const n: number = arr.length;
  for (let i: number = 1; i < n; i++) {
    let key: T = arr[i], j: number = i - 1;
    for (; j >= 0 && arr[j] > key; j--)
      arr[j + 1] = arr[j];
    arr[j + 1] = key;
  }
}

const arr: number[] = [1, 5, 3, 4, 2];
insertSort(arr);
console.log(arr);

const nums: string[] = ['d', 'c', 'b', 'e', 'a'];
insertSort(nums);
console.log(nums);