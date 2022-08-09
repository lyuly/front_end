#!/usr/bin/env node
// 浅拷贝
function shallowCopy(obj) {
  if (!obj || typeof obj !== 'object')  return;

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      newObj[key] = obj[key];
  }
  return newObj;
}

let arr = [1, 2, 3];
let newArr = shallowCopy(arr);
newArr[0] = 4;
console.log(`arr is ${arr} and newArr is ${newArr}`);