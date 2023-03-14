#!/usr/bin/env bun

/* 
手写new操作符
1. 首先创建一个空对象
2. 设置原型，将对象的原型指向构造函数的prototype对象
3. 执行构造函数的代码
4. 判断返回值的类型，如果是值类型，则返回这个对象，如果是引用类型，则返回引用类型的对象
*/

export function myNew(constructor: Function, ...args: any[]) {
  let obj = {}

  Object.setPrototypeOf(obj, constructor.prototype)
  let result = constructor.apply(obj, args)
  return result instanceof Object ? result : obj
}

function Person(this: any, name: string, age: number) {
  this.name = name
  this.age = age
}

const p = myNew(Person, 'pig', 18)
console.log(p)