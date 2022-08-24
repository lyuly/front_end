#!/usr/bin/env bun

Array.prototype.myMap = function(fn) {
  if (typeof fn !== 'function') {
    throw new Error('error');
  }

  let res = [];

  for (let i = 0, len = this.length; i < len; i++) {
    res.push(fn(this[i]));
  }

  return res;
}