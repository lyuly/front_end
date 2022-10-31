#!/usr/bin/env bun

const fn = (arr) => {
  let ans = 0;
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(arr[i], ans + arr[i]);
    res = Math.max(res, ans);
  }
  return res;
}

const a = [6, -1, 5, 4, -7];
console.log(fn(a));