#!/usr/bin/env bun

/* 
深拷贝
*/

function deepCopy(obj) {
  if (!obj || typeof obj !== 'object')  return obj;

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}

console.log(deepCopy({a: 1, b: {c: 3}}));