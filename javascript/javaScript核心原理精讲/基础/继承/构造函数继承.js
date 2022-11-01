#!/usr/bin/env node

/* 
构造函数继承，借助call
只能继承父类的属性和方法，不能继承原型属性和方法
*/

function Parent1(){
  this.name = 'parent1'
}

Parent1.prototype.getName = function() {
  return this.name
}

function Child1() {
  Parent1.call(this)
  this.type = 'child1'
}

let child = new Child1()
console.log(child)
console.log(child.getName()) // 报错