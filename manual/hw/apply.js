#!/usr/bin/env node

Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new Error('type error');
    return;
  }

  context = context || window;
  let result = null;
  context.fn = this;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.myApply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.myApply(null, numbers);

console.log(min);
// expected output: 2