/* 
防抖：事件在n秒后被触发，如果在n秒内又被触发则重新计时
*/

const debounce = (fn, wait) => {
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