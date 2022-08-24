#!/usr/bin/env bun

/* 
new手写
1. 创建一个空对象
2. 将对象的原型指向构造函数的原型
3. 应用这个对象
4. 判断结果是对象还是函数
*/

function objectFactory() {
  let newObj = null;
  let constructor = Array.prototype.slice.call(arguments);

  if (typeof constructor !== 'function') {
    throw new Error('type error');
  }

  newObj = Object.create(constructor.prototype);
  let result = constructor.apply(newObj, arguments);
  let flag = result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObj;
}