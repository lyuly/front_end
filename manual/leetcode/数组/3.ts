#!/usr/bin/env bun

var findRepeatNumber = function(nums) {
  let i = 0;
  while (i < nums.length) {
      if (nums[i] === i) {
          i++;
          continue;
      }
      if (nums[nums[i]] === nums[i])
          return nums[i];
      [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
  }
  return -1;
};

const arr = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(arr));