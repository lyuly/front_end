#!/usr/bin/env ts-node

import randomArr from '../../randomArr'

/* 
三向切分的快速排序

传入参数a lo hi

维护指针 lt 使得 a[lo...lt - 1] 中的元素都小于v
另一个指针 gt 使得 a[gt + 1...hi]中的元素都大于v

a[i] < v, exch(a[lt], a[i]) lt-- i--
a[i] > v, exch(a[gt], a[i]) gt--
a[i] === v, i++
*/

function quickSort(a: number[], lo: number, hi: number) {
  if (hi <= lo) return
  let lt: number = lo, gt: number = hi, i: number = lo + 1
  let v: number = a[lo]

  while (i <= gt) {
    const cmp: number = a[i] > v ? 1 : -1
    if (cmp < 0) {
      [a[lt], a[i]] = [a[i], a[lt]]
      lt++
      i++
    } else if (cmp > 0) {
      [a[i], a[gt]] = [a[gt], a[i]]
      gt--
    } else {
      i++
    }
  }

  quickSort(a, lo, lt - 1)
  quickSort(a, gt + 1, hi)
}

const arr: number[] = randomArr(10)
quickSort(arr, 0, arr.length - 1)
console.log(arr)