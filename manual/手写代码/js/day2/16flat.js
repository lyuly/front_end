#!/usr/bin/env bun

function flatReduce(arr, d) {
  return d > 0 ? arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatReduce(cur, d - 1) : cur), []) : arr.slice();
}

let arr = [1, [2, [3, [4]]]];
console.log(flatReduce(arr, Infinity));