#!/usr/bin/env bun

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

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

console.log(objectFactory(Person, 'pig', 1, '男'));