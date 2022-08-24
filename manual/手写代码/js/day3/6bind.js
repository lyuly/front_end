#!/usr/bin/env bun

Function.prototype.myBing = function(context) {
  if (typeof context !== 'function') {
    throw new Error('type error');
  }

  let args = [...arguments].slice(1), fn = this;

  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}