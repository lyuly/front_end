#!/usr/bin/env node

/* 
typeof 判断基本类型
instanceof 判断引用类型
Object.prototype.toString 通吃
*/
console.log(typeof 1)
console.log(typeof '1')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof [])
console.log(typeof {})

console.log('===================')

console.log([] instanceof Array)
console.log({} instanceof Object)

function myInstanceOf(left, right) {
  if (typeof left !== 'object') {
    return
  }

  let proto = Object.getPrototypeOf(left), prototype = right.prototype

  while (true) {
    if (!proto) return false
    if (proto === prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceOf({}, Object))
console.log(myInstanceOf([], Array))

console.log('=======================')

console.log(Object.prototype.toString.call(/\d+/).replace(/^\[object (\S+)\]$/, '$1'))

function getType(obj) {
  if (typeof obj !== 'object') {
    return typeof obj
  }

  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}

console.log(getType({}))