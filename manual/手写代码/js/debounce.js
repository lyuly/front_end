/* 
防抖：事件在触发n秒后执行回调，如果在这n秒内事件又被触发，则重新计时
*/

function debounce(fn, wait) {
  let timer = null;

  return function() {
    let context = this, args = arguments;

    if (timer) {
      clearTimeout();
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}

module.exports = debounce