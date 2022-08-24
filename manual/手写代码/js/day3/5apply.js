#!/usr/bin/env bun

Function.prototype.myApply = function(context) {
  if (typeof context !== 'function') {
    throw new Error('type error');
  }

  context = context || window;
  let args = arguments[1], result = null;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
}