#!/usr/bin/env bun

function shallowCopy(obj) {
  if (typeof obj !== 'object')  {
    throw new Error('type error');
  }

  let newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}