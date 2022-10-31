#!/usr/bin/env node

Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new Error('type error');
    return;
  }

  context = context || window;
  let result = null, args = [...arguments].slice(1);
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myCall(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);