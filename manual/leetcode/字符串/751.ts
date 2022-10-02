#!/usr/bin/env bun

function ipToCIDR(ip: string, n: number): string[] {
  const arr: Array<string> = [];
  for (let i = 0; i < n; i++) {
    const str = ip.split('.').map(Number);
    str[3] = str[3] + i;
    arr.push(str.join('.'));
  }
  return arr;
};

const ip = "255.0.0.7", n = 10;

// console.log(ipToCIDR(ip, n));
let a = 8..toString(2);
a = '0'.repeat(8 - a.length) + a;
console.log(a);
console.log(7^8);