#!/usr/bin/env node
// 深拷贝

function deepCopy(obj) {
  if (!obj || typeof obj !== 'object')  return;

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

let obj = {name: 'yy', age: 18, sex: 'woman'};
let newObj = deepCopy(obj);
newObj.name = 'll';
console.log(`obj is ${obj}, newObj is ${newObj}`);