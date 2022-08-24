#!/usr/bin/env bun

function shallowCopy(obj) {
  if (!obj || typeof obj !== 'object') {
    throw new Error('type error');
  }

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const obj = {
  name: 'pig',
  age: 1
}

const newObj = shallowCopy(obj);
console.log(newObj);
obj.name = 'dog';
console.log(obj);
console.log(newObj);