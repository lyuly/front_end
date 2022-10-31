#!/usr/bin/env node
/* 
箭头函数
1. 没有arguments使用，需用rest参数代替
*/
const obj = {
  name: '张三',
  getName() {
    return this.name
  },
  getName1: () => {
    return this.name
  }
}

obj.__proto__.getName2 = function() {
  return this.name
}

obj.__proto__.getName3 = () => {
  return this.name
}
// console.log(`普通函数${obj.getName()}`);
// console.log(`普通函数${obj.getName2()}`);
// console.log(`箭头函数${obj.getName1()}`);
// console.log(`箭头函数${obj.getName3()}`);

const fn1 = () => {
  console.log(`arguments: ${arguments}`);
}
fn1(100, 200);

function fn2() {
  console.log(`arguments: ${arguments}`);
}

fn2(100, 200);

const fn3 = (...values) => {
  console.log(`values: ${values}`);
}
fn3(100, 200);

/* 
2.无法通过apply、call、bind改变this指向
*/

const fn4 = () => {
  console.log('this', this)
}
fn4()

function fn5(){
  console.log('this', this)
}
fn5()

/* 
3.对象方法中不能使用箭头函数
this永远指向函数的调用者
this指向的是定义时所做的对象，而不是使用时所在的对象
*/