#!/usr/bin/env node

/* 
apply实现
apply(this, [arg1, arg2])
*/

Function.prototype.myApply = function(context, args) {
  context = context || global || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.myApply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.myApply(null, numbers);

console.log(min);