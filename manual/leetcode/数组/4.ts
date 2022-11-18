#!/usr/bin/env ts-node

// O(m+n)
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergeTwoSortedArray = (nums1: number[], nums2: number[]): number[] => {
    let i: number = 0, j : number = 0, k: number = 0
    const merged: number[] = new Array(nums1.length + nums2.length)
    
    while (i < nums1.length && j < nums2.length) {
      merged[k++] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]
    }

    while (i < nums1.length) {
      merged[k++] = nums1[i++]
    }

    while (j < nums2.length) {
      merged[k++] = nums2[j++]
    }

    return merged
  }

  const mergedArray = mergeTwoSortedArray(nums1, nums2)
  const n = mergedArray.length

  if (n % 2) {
    return mergedArray[Math.floor(n / 2)]
  } else {
    return (mergedArray[Math.floor((n - 1) / 2)] + mergedArray[Math.floor(n / 2)]) / 2.0
  }
};

console.time('first')
const nums1: number[] = [1,3], nums2: number[] = [2]
const res: number = findMedianSortedArrays(nums1, nums2)
console.log(res)
console.timeEnd('first')

// O(log(m+n))
function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {
  const m: number = nums1.length, n: number = nums2.length
  if (m > n) {
      return findMedianSortedArrays2(nums2, nums1)
  }

  if (m === 0) {
      return (nums2[Math.floor((n - 1) / 2)] + nums2[Math.floor(n / 2)]) / 2
  }

  let len: number = m + n
  let a_startK: number = 0, a_endK: number = m
  let cutA: number = 0, cutB: number = 0

  while (a_startK <= a_endK) {
      cutA = Math.floor((a_endK + a_startK) / 2)
      cutB = Math.floor((len + 1) / 2) - cutA
      let l1: number = cutA === 0 ? Number.MIN_SAFE_INTEGER : nums1[cutA - 1]
      let l2: number = cutB === 0 ? Number.MIN_SAFE_INTEGER : nums2[cutB - 1]
      let r1: number = cutA === m ? Number.MAX_SAFE_INTEGER : nums1[cutA]
      let r2: number = cutB === n ? Number.MAX_SAFE_INTEGER : nums2[cutB]

      if (l1 > r2) {
          a_endK = cutA - 1
      } else if (l2 > r1) {
          a_startK = cutA + 1
      } else {
          if (len % 2 === 0) {
              return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
          } else {
              return Math.max(l1, l2)
          }
      }
  }
  return -1
};

console.time('second')
const arr1: number[] = [1,3], arr2: number[] = [2]
const res2: number = findMedianSortedArrays2(arr1, arr2)
console.log(res2)
console.timeEnd('second')