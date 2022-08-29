#!/usr/bin/env bun

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

const arr = loggingIdentity([1, 2, 3, 4, 5]);
console.log(`arr: ${arr}`);