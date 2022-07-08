// 防抖：在事件被触发n秒后执行回调，如果在这n秒内又被触发，则重新计时
function debounce(fn, wait) {
  let timer = null;

  return function() {
    let context = this, args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}