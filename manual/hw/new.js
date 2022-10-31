#!/usr/bin/env bun

/* 
1.首先创建一个空对象，判断构造函数是否为函数
2.将对象的原型指向函数的prototype属性
3.将函数的this指向这个对象，并执行构造函数的代码
4.判断返回值的类型，如果是值类型，则返回这个对象，如果是引用类型，返回引用类型的对象
*/

function objectFactory() {
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);

  if (typeof constructor !== 'function') {
    console.error('type error');
    return;
  }

  let result = null;
  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj, arguments);
  let flag = result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObj;
}