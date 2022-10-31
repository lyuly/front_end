#!/usr/bin/env bun

/* 
堆排序：
一种基于二叉堆结构的排序算法
最大堆：
* 最大堆中的最大元素出现在根结点
* 堆中每个父节点的元素值都大于等于其孩结点

O(nlogn)
不稳定
*/

const heapify = <T>(arr: Array<T>, n: number, i: number) => {
  let largest: number = i; // 将最大元素设置为堆顶元素
  let l: number = 2 * i + 1;
  let r: number = 2 * i + 2;

  // 如果left比root大的话
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // 如果right比root大的话
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

const heapSort = <T>(arr: Array<T>, n: number) => {
  // 建立堆
  for (let i: number = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 一个个从堆顶取出元素
  for (let i: number = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

const arr = [1, 5, 2, 4, 3];
heapSort(arr, arr.length);
console.log(arr);