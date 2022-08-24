#!/usr/bin/env bun

/* 
手写new
1. 创建一个空对象
2. 将构造函数的原型提取出来
3. 判断构造函数的是否为函数
4. 对象的原型指向构造函数的原型
*/

function objectFactory() {
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);

  if (typeof constructor !== 'function') {
    throw new Error('type error');
  }

  newObj = Object.create(constructor.prototype);
  let result = constructor.apply(newObj, arguments);
  let flag = result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObj;
}

function person(name, age) {
  return {
    name: name,
    age: age
  }
}

console.log(objectFactory(person, 'uuu', 18));