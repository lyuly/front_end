#!/usr/bin/env bun

function identity2<T>(arg: T): T {
  return arg;
}

let str = identity2('Hello, World!');
console.log(str);