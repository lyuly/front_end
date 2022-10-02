#!/usr/bin/env bun

/* 
柯里化
*/

function curry(fn: Function) {
  return function curryInner(...args) {
    if (args.length >= fn.length)
      fn(...args);
    return (...args2) => curryInner(...args, ...args2);
  }
}

function curry1(fn) {
  return function curried(...args) {
    if (args.length >= fn.length)
      fn.apply(this, ...args);
    else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

const join = (a, b, c) => {
  console.log(`${a}_${b}_${c}`);
}

const curriedJoin = curry(join);

curriedJoin(1, 2, 3);