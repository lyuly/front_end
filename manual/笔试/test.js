#!/usr/bin/env node

const matrix = [[1, 1, 1], [1, 1, 1], [0, 1, 1]];

const solve = (matrix) => {
  let flag = true;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j && matrix[i][j] !== 1) {
        flag = false;
      }
      if (i !== j && matrix[i][j] !== matrix[j][i]) {
        flag = false;
      }
    }
  }
  return flag;
}

// console.log(solve(matrix));

function solve1(t) {
  const obj = {
    '0': '12:00',
    '1': '1:05',
    '2': '2:11',
    '3': '3:16',
    '4': '4:22',
    '5': '5:27',
    '6': '6:33',
    '7': '7:38',
    '8': '8:44',
    '9': '9:49',
    '10': '10:55',
    '11': '0',
    '12': '12:00',
    '13': '13:05',
    '14': '2:11',
    '15': '15:16',
    '16': '16:22',
    '17': '17:27',
    '18': '18:33',
    '19': '19:38',
    '20': '20:44',
    '21': '21:49',
    '22': '22:55'
  }
  return obj[t]
}

function fn(s) {
  const arr = s.split(' ');
  const res = [];
  for (const item of arr) {
    // const a = item.replace(/[\u4e00-\u9fa5]/g, '');
    let a = '';
    for (const ch of item) {
      if ('0' <= ch && ch <= '9') {
        a += ch;
      }
    }
    if (a.length === 8) {
      res.push(a);
    }
  }
  return res.join(' ');
}

const s = '20200001张三 20200002李四 20200003王麻子';
console.log(fn(s));