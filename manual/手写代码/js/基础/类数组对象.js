#!/usr/bin/env bun

/* 
有length属性
*/

const obj = {
  0: 'jl',
  1: '19',
  length: 2
}

console.log(Array.from(obj));
console.log(Array.prototype.slice.call(obj));
console.log(Array.prototype.splice.call(obj, 0));
console.log(Array.prototype.concat.apply([], obj));

console.log([,,,].length);