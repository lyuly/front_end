#!/usr/bin/env bun

/* 
合并两个有序数组
双指针尾开始
*/

function merge<T>(nums1: Array<T>, m: number, nums2: Array<T>, n: number): void {
  let p1: number = m - 1, p2: number = n - 1;
  let tail: number = m + n - 1, cur: T;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
}

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);