/* 
节流：事件在指定的时间内只能执行一次
*/

function throttle(fn, delay) {
  let pre = Date.now();

  return function() {
    let cur = Date.now(), args = arguments, context = this;

    if (cur - pre >= delay) {
      pre = Date.now();
      return fn.apply(context, args);
    }
  }
}