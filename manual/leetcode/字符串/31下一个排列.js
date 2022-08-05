#!/usr/bin/env bun
console.time('first')
const fs = require('fs');
const lines = fs.readFileSync('31.txt', 'utf-8').toString().split(/\r\n|\r|\n/);

console.log(lines);

const nextPermutation = (nums) => {
  let n = nums.length;
  let i = n - 2;;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = n - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let l = i + 1, r = n - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
}

for (const line of lines) {
  const arr = line.split(' ').map(Number);
  console.log(`输入的数组为：${arr}`);
  nextPermutation(arr);
  console.log(`输出的数组为：${arr}`);
}
console.timeEnd('first')