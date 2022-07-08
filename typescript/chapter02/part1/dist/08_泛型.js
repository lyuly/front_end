"use strict";
/* function fn(a: number):number {
  return a;
} */
/*
  在定义函数或类时，类型不明确的可以使用泛型
*/
function fn(a) {
    return a;
}
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
console.log(fn3('1'));
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('苏苏');
console.log(mc);
