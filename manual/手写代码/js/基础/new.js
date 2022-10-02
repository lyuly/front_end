#!/usr/bin/env bun

/* 
1.首先创建一个空对象
2.设置原型，将对象的原型指向构造函数的prototype对象
3.让函数的this指向这个对象，执行构造函数的代码
4.判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型 ，则返回引用类型的对象
*/

function objectFactory() {
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor != 'function') {
    throw new Error('type error');
  }

  let result = null;
  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj, arguments);
  let flag = result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObj;
}

function fn(value) {
  this.value = value;
  this.next = null;
}

const p = objectFactory(fn, 1);
console.log(p);