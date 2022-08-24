#!/usr/bin/env bun

function debounce(fn, wait) {
  let timer = null;

  return function() {
    let context = this, args = arguments[1];

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      context.fn(context, ...args);
    }, wait);
  }
}