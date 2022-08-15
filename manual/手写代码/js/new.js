#!/usr/bin/env bun
/* 
new实现
1.首先创建一个空对象
2.将对象的原型指向构造函数的原型
3.让函数的this指向这个对象，执行构造函数的代码
4.判断返回值的类型，如果是值类型，返回创建的对象，如果是引用类型，则返回创建的引用类型的对象
*/

function objectFactory() {
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== 'function') {
    console.log('type error');
    return
  }
  let result = null;
  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj, arguments);
  let flag = result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObj;
}

function fn(name, age) {
  this.name = name;
  this.age = age;
}

const obj = new objectFactory(fn, 'kkk', 18);
console.log(obj);