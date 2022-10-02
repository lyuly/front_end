#!/usr/bin/env bun

import * as fs from "fs"

const lines = fs.readFileSync('1.txt', 'utf-8').toString().split(/\r\n|\r|\n/);
const n = parseInt(lines[0]);
const m = parseInt(lines[1]);
const [x, y] = lines[lines.length - 1].split(' ');

let map = new Map();
for (let i = 2; i < m + 2; i++) {
  const arr = lines[i].split(' ');
  for (let i = 1; i < arr.length; i++) {
    map.set(arr[i], arr[0]);
  }
}

let sum1: number = 0;
let sum2: number = 0;
let p: string = x;
let q: string = y;

while (map.get(p) != undefined) {
  sum1++;
  p = map.get(p);
}

while (map.get(q) != undefined) {
  sum2++;
  q = map.get(q);
}

if (p === q) {
  console.log(sum1 + sum2);
}
else {
  console.log(-1);
}