#!/usr/bin/env bun

function identity<T>(arg: T): T {
  return arg;
}

let str = identity('Hello, World!');
console.log(str);