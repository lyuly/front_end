#!/usr/bin/env bun

/* 
防抖：事件在n秒后被触发，如果在这n秒内又被触发，则重新计时
*/

function debounce(fn, wait) {
  let timer = null;

  return function() {
    let context = this, args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}