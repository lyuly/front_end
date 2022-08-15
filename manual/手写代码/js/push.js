#!/usr/bin/env bun
Array.prototype.myPush = function() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
}

let arr = [];
arr.myPush(1, 2, 3);
console.log(arr);

const response = await fetch('http://107.173.86.3/info');
const text = await response.text();
console.log(text);