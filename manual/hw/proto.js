/* 
prototype: 原型
__proto__: 原型链

从属关系
prototype -> 函数的一个属性：对象{}
__proto__ -> 对象Object的一个属性：对象{}

每一个对象的 __proto__ 保存着其构造函数的 prototype
*/

function Person() {
  this.a = 1;
}

console.log(Person.prototype);

Person.prototype.b = 2;

const p = new Person();
console.log(p.__proto__);

console.log(Person.prototype === p.__proto__);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log('Object.prototype是', Object.prototype);
console.log('Object.prototype.__proto__是', Object.prototype.__proto__);

Object.prototype.c = 3;

/* 
p {
  a: 1,
  __proto__: Person.prototype = {
    b: 2,
    __proto__: Object.prototype = {
      c: 3
    }
  }
}
上述称为原型链
*/

console.log(p.a);
console.log(p.b);
console.log(p.c);

console.log(Person.__proto__ === Function.prototype);

console.log(Function.__proto__);
console.log(Function.prototype);
console.log(Function.__proto__ === Function.prototype);

console.log(Object.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.__proto__);

console.log("=======================");
console.log(p.hasOwnProperty('a'));
console.log(p.hasOwnProperty('b'));
console.log(p.hasOwnProperty('c'));