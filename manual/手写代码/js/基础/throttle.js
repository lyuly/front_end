/* 
节流：在指定的时间内只能触发一次
*/

function throttle(fn, delay) {
  let cur = Date.now();

  return function() {
    let now = Date.now(), context = this, args = arguments;

    if (now - cur >= delay) {
      cur = Date.now();
      return fn.apply(context, args);
    }
  }
}

module.exports = throttle