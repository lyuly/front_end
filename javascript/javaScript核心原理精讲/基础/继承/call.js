#!/usr/bin/env node

/* 
call实现
call(fn, arg1, arg2)
*/

Function.prototype.myCall = function(context, ...args) {
  console.log(typeof this)
  context = context || global || window
  context.fn = this
  // let result = eval('context.fn(...args)')
  let result = context.fn(...args)
  delete context.fn
  return result
}

function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.myCall(this, name, price)
  this.category = 'food'
}

console.log(new Food('cheese', 5).name)