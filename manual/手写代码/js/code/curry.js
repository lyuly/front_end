#!/usr/bin/env bun

/* 
函数柯里化：一种将使用多个参数的一个函数转换成一系列使用一个参数的函数
*/

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

// es6实现
function es6(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : es6.bind(null, fn, ...args);
}

function sum(a, b, c) {
  return a + b + c
}

const a = es6(sum);
console.log(a(1) (2) (3));