#!/usr/bin/env node
const randomArr = require('./randomArr');

const arr = randomArr.randomArr(10);

console.log(`之前：${arr}`);
console.log(`之后：${arr.map((item) => item + 1)}`);