#!/usr/bin/env bun

/* 
节流：在规定的时间内只能执行一次
*/

function throttle(fn, delay) {
  let cur = Date.now();

  return function() {
    let context = this, args = arguments;
    let now = Date.now();
    if (now - cur >= delay) {
      cur = Date.now();
      return fn.apply(context, arguments);
    }
  }
}