#!/usr/bin/env bun

interface LengthWise {
  length: number;
}

function loggingIdentity1<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity1([1, 2, 3]));

function getProperty(obj: any, key: any) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4};
console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'm'));