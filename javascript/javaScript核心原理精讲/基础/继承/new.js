#!/usr/bin/env node

/* 
new原理
1.创建一个新对象
2.将构造函数的作用域赋给新对象（this指向新对象）
3.执行构造函数中的代码
4.返回新对象
*/

function myNew() {
  let newObj = null, constructor = Array.prototype.shift.call(arguments)
  if (typeof constructor !== 'function') {
    return
  }
  newObj = Object.create(constructor.prototype)
  let result = constructor.apply(newObj, arguments)
  let flag = result && (typeof result === 'object' || typeof result === 'function')
  return flag ? result : newObj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

const p = myNew(Person, 'li', 20)
console.log(p)
