#!/usr/bin/env bun

Function.prototype.myCall = function(context) {
  if (typeof context !== 'function') {
    throw new Error('type error');
  }

  context = context || window;
  let args = [...arguments].slice(1), result = null;
  context.fn = this;
  result = context.apply(...args);
  delete context.fn;
  return result;
}