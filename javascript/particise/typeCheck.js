#!/usr/bin/env bun

// 基本类型
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 1n);
console.log(typeof false);
console.log(typeof Symbol('name'));

// 引用类型
console.log({} instanceof Object);
console.log([] instanceof Array);
console.log(new Date() instanceof Date);

// instanceof实现
function myInstanceOf(left, right) {
  // 获取原型，类型的原型
  let proto = Object.getPrototypeOf(left), prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype)  return true;
    proto = Object.getPrototypeOf(proto);
  }
}

// 构造函数
console.log((2).constructor === Number);
console.log('2'.constructor === String);
console.log([].constructor === Array);
console.log({}.constructor === Object);
console.log((function() {}).constructor === Function);

// Object.prototype.toString.call()
console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call('1'));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(1n));
console.log(Object.prototype.toString.call(function() {}));
console.log(Object.prototype.toString.call(false));
