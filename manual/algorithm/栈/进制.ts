#!/usr/bin/env bun

interface Array<T> {
  pop(): T;
}

const decToOct = (n: number): void => {
  let res: number = 0;
  let stk: Array<number> = [];
  while (n) {
    let x: number = n % 8;
    stk.push(x);
    n = Math.floor(n / 8);
  }
  while (stk.length) {
    res = res * 10 + stk.pop();
  }
  console.log(`八进制数为${res}`);
}

console.log(10..toString(8));
decToOct(10);