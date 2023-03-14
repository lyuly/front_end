#!/usr/bin/env node

const fs = require('fs')

const lines = fs.readFileSync('./ctrlcv.txt').toString().split(/\r\n|\r|\n/)

const n = parseInt(lines[0])

const a = lines[1].split(' ').map(Number)

const m = parseInt(lines[2])

const b = new Array(n).fill(-1)

for (let i = 3; i < lines.length && lines[i] !== ''; i++) {
  const arr = lines[i].split(' ').map(Number)
  if (arr[0] === 2) {
    console.log(b[arr[1] - 1])
  } else {
    const temp = a.slice(arr[2] - 1, arr[2] + arr[1])
    b.splice(arr[3]- 1, arr[1], ...temp)
  }
}