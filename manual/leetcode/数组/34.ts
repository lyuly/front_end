#!/usr/bin/env bun

var searchRange = function(nums: number[], target: number): number[] {
  const binarySearch = (nums: number[], target: number, flag: boolean): number => {
    let lo: number = 0, hi: number = nums.length - 1, n: number = nums.length;
    while (lo <= hi) {
      let mid: number = lo + ((hi - lo) >> 1);
      if (nums[mid] > target || flag && nums[mid] >= target) {
        hi = mid - 1;
        n = mid;
      } else {
        lo = mid + 1;
      }
    }
    return n;
  }
  let left: number = binarySearch(nums, target, true);
  let right: number = binarySearch(nums, target, false) - 1;
  if (left <= right && right < nums.length && nums[left] == target && nums[right] == target)
    return [left, right];
  return [-1, -1];
};

const nums = [1], target = 1;
console.log(searchRange(nums, target));