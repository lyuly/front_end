#!/usr/bin/env bun

/* 
快速排序（分治法）
1. 从数列中挑出一个元素，称为基准（pivot）
2. 重新排序数列，所有元素比基准小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（parition）操作
3.递归地把小于基准值元素的子数列和大于等于基准值元素的子数列排序
*/

const quickSort = <T>(arr: Array<T>) => {
  if (arr.length <= 1)
    return arr;
  let pivot: T = arr[0];
  const left: Array<T> = [];
  const right: Array<T> = [];
  for (let i: number = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [1, 5, 2, 4, 3];
console.log(quickSort(arr));