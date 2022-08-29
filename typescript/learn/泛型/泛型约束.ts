#!/usr/bin/env bun

interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity([1, 2, 3]));

function getProperty(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4};
console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'm'));