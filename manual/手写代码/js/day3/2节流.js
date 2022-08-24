#!/usr/bin/env bun

function throttle(fn, delay) {
  let cur = Date.now();

  return function() {
    let now = Date.now(), context = this;

    if (now - cur >= delay) {
      now = Date.now();
      return fn.apply(context, arguments);
    }
  }
}