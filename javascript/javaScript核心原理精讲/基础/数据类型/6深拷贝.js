#!/usr/bin/env node

/* 
1. JSON.stringify
2. 基础版，手写递归实现 (Array Date无法拷贝)
3. 改进版，改进后递归实现
*/

// 基础版
function deepCopyBasic(obj) {
  if (typeof obj === 'object' && obj) {
    const newObj = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = typeof obj[key] === 'object' ? deepCopyBasic(obj[key]) : obj[key]
      }
    }
    return newObj
  }
  return obj
}

// 改进版
/* 
解决Date、RegExp
循环引用问题
*/

const judgeObj = (obj) => {
  return (typeof obj === 'object' || typeof obj === 'function') && (obj)
}

function deepCopy(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) {
    return new Date(obj)
  }
  if (obj.constructor === RegExp) {
    return new RegExp(obj)
  }
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  // 保存obj所有的key
  let allDesc = Object.getOwnPropertyDescriptors(obj)
  let newObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  hash.set(obj, newObj)
  for (const key of Reflect.ownKeys(obj)) {
    newObj[key] =  judgeObj(obj[key]) && typeof obj[key] !== 'function' ? deepCopy(obj[key], hash) : obj[key]
  }
  return newObj
}

const obj = {
  name: 'oi',
  age: 20,
  salary: {
    month: '30k',
    year: {
      all: '40w',
      date: new Date()
    },
    count: function() {
      return age + 1
    }
  }
}

console.log(obj)

const newObj = deepCopyBasic(obj)
console.log(newObj)

const cloneObj = deepCopy(obj)
console.log(cloneObj)