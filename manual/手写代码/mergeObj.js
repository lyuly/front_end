#!/usr/bin/env node

function mergeObj(a, b) {
  if (typeof a !== 'object' && typeof b !== 'object')
    return 'type Error';
  return Object.assign(a, b);
}

const a = {
  age: 18
};

const b = {
  name: 'pig'
};

console.time('mergeObj');
console.log(mergeObj(a, b));
console.timeEnd('mergeObj');

const merge = (a, b) => {
  if (typeof a !== 'object' && typeof b !== 'object')
    return 'type Error';
  const obj = {};
  for (let key in a) {
    if (obj.hasOwnProperty(key)) {
      continue;
    } else {
      obj[key] = a[key];
    }
  }
  for (let key in b) {
    if (obj.hasOwnProperty(key)) {
      continue;
    } else {
      obj[key] = b[key];
    }
  }
  return obj;
}

console.time('merge');
console.log(merge(a, b));
console.timeEnd('merge');