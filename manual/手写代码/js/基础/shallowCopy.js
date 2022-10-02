#!/usr/bin/env bun

/* 
浅拷贝
*/

function shallowCopy(object) {
  if (!object || typeof object !== 'object')  return;

  let newObj = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[key] = object[key];
    }
  }
  return newObj;
}

console.log(shallowCopy({a: 1, b: 2}));