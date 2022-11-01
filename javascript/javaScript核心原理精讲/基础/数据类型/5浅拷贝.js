#!/usr/bin/env node

/* 
Object.assign
... 扩展运算符
concat 拷贝数组
slice() 数组
*/

function shallowCopy(obj) {
  if (typeof obj === 'object' && obj) {
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key]
      }
    }
    return newObj
  }
  return obj
}

console.log(shallowCopy({name: 'oi', age: 18}))