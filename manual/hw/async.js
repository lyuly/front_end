#!/usr/bin/env node

async function fn1(a, b) {
  return a + b;
}

async function fn() {
  const res = await fn1(1, 2);
  console.log(res);
}

console.time('start');
fn();
console.timeEnd('start');