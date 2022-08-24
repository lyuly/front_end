#!/usr/bin/env node
const randomArr = require('./randomArr');

const arr = randomArr.randomArr(10);

console.time('each');
arr.forEach(element => {
  element *= 2;
});
console.timeEnd('each');

console.log('------------');

console.time('forof');
for (let item of arr) {
  item *= 2;
}
console.timeEnd('forof');