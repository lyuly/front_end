#!/usr/bin/env ts-node

/* 
n <= 10，采用插入排序
n > 10，采用三路快速排序
10 < n <= 1000， 采用中位数作为哨兵元素
n > 100，每隔200～215个元素挑出一个元素放到一个新数组中，然后对它排序，找到中间位置的数以此作为中位数
*/

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
}

const quickSort = (arr, lo, hi) => {
  const parition = (arr, lo, hi) => {
    let v = arr[lo], i = lo, j = hi + 1
    while (true) {
      while (arr[++i] < v)  if (i === hi) break
      while (arr[--j] > v) if (j === lo)  break
      if (i >= j) {
        break
      }
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    [arr[j], arr[lo]] = [arr[lo], arr[j]]
    return j
  }

  if (lo >= hi) return

  const j = parition(arr, lo, hi)
  quickSort(arr, lo, j - 1)
  quickSort(arr, j + 1, hi)
}

const sort = (arr) => {
  if (arr.length <= 10) {
    insertSort(arr)
  } else {
    quickSort(arr, 0, arr.length - 1)
  }
  return arr
}

const a = [2, 5, 3, 2, 1, 11, 19, 4, 10, 9, 6, 0]
console.log(sort(a))