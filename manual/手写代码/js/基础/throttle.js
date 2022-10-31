/* 
节流：在固定的时间内只能被触发一次
*/

const throttle = (fn, delay) => {
  let pre = Date.now();

  return function() {
    let cur = Date.now(), args = arguments, context = this;
    if (cur - pre >= delay) {
      pre = Date.now();
      return fn.apply(context, args);
    }
  }
}