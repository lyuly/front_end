#!/usr/bin/env bun

Array.prototype.myFilter = function(fn) {
  if (typeof fn !== 'function') {
    throw new Error('type error');
  }

  let res = [];

  for (let i = 0, len = this.length; i < len; i++) {
    fn(this[i]) && res.push(this[i]);
  }
  return res;
}

const a = [1, 2, 1, 3];
const b = a.myFilter((a) => a > 1);
console.log(b);