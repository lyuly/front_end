#!/usr/bin/env bun

function sum() {
  return Array.from(arguments).reduce((a, b) => a + b);
}

const sum1 = (...args) => {
  return args.reduce((a, b) => a + b);
};


console.log(sum(1, 2, 3));
console.log(sum1(1, 2, 3));
