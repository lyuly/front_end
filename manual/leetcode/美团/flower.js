#!/usr/bin/env bun

const fs = require('fs')
const lines = fs.readFileSync('flower.txt', 'utf-8').toString().split(/\r\n|\r|\n/);

const n = parseInt(lines[0]);
let arr = new Array(n + 1).fill(0);
let sum = 0;
let maxPath = 0;
let dis = 0;

for (let i = 1; i < lines.length; i++) {
  const [u, v, w] = lines[i].split(' ').map(Number);
  arr[v] = arr[u] + w;
  dis += arr[v];
  sum += w;
  maxPath = Math.max(maxPath, arr[v]);
}

console.log(sum * 2 - maxPath);