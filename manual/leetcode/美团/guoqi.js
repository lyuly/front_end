#!/usr/bin/env bun
const fs = require('fs')
const lines = fs.readFileSync('guoqi.txt', 'utf-8').toString().split(/\r\n|\r|\n/)

const n = parseInt(lines[0]);

const arr = lines[1].split(' ').map(Number)

let count = 0, stack = []

for (let item of arr) {
  if (stack.length !== 0 && stack[stack.length - 1] !== item)
    stack.push(item)
  else {
    while (stack.length > 0 && item === stack[stack.length - 1]) {
      stack.pop()
      item += 1
      count += 1
    }
    stack.push(item)
  }
}
console.log(count)