#!/usr/bin/env bun

function deepCopy(obj) {
  if (typeof obj !== 'object')  {
    throw new Error('type error');
  }

  let newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}