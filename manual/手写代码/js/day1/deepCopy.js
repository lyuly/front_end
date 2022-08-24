#!/usr/bin/env bun

function deepCopy(obj) {
  if (!obj || typeof obj !== 'object') {
    throw new Error('type error');
  }

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

const obj = {
  name: 'pig',
  age: 1,
  salary: {
    month: '2w',
    all: '30w'
  }
}

const newObj = deepCopy(obj);
console.log(newObj);