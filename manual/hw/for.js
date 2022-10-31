#!/usr/bin/env node

/* 
forof 遍历可迭代，数组
forin 遍历对象
*/

const object = {
  name: 'pig',
  age: 18,
  face: 'smile'
}

for (const iterator in object) {
  console.log(iterator);
}

const a = [1, 2, 3, 4, 5]

for (const iterator of a) {
  console.log(iterator);
}