#!/usr/bin/env bun
/* 
五子棋判断
*/
const points = [[2,-1],[2,2],[2,1],[2,0],[2,3]];

let pre = points[0];
let flagA = true;
let flagB = true;
let flagC = true;

for (let i = 1; i < points.length; i++) {
  if (pre[0] !== points[i][0])
    flagA = false;
}

if (flagA)
  return true;

pre = points[0][1];

for (let i = 1; i < points.length; i++) {
  if (pre[1] !== points[i][1])
    flagB = false;
}

if (flagB)
  return true;

let k = (points[0][1] - points[1][1]) / (points[0][0] - points[0][1]);
let k1 = (points[1][1] - points[2][1]) / (points[1][0] - points[2][0]);
let k2 = (points[4][1] - points[3][1]) / (points[4][0] - points[3][0]);

if (k === k1 && k1 === k2) {
  return true
}
return false;