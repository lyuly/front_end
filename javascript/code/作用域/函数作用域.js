#!/usr/bin/env bun

/* 
函数作用域:
由函数创建的作用域，函数中定义的变量无法从函数外部访问，也无法从其他函数内部访问
*/

function fn() {
  var x = 'hello world'
  console.log(x)
}
// console.log(x)

var y = 'hello world'

exampleFunction()

function exampleFunction() {
  console.log('Insde function')
  console.log(y)
}

console.log('Outside function')
console.log(y)