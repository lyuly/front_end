// 节流：指定的事件只能在一个时间段内发生一次，被触发多次的话，也只能一次生效
function throttle(fn, delay) {
  let curTime = Date.now();

  return function() {
    let context = this, args = arguments, nowTime = Date.now();

    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  }
}