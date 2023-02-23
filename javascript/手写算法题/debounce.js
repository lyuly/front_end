/* 
事件在n秒后被触发，如果在这n秒内又被触发，则重新计时
*/

function debounce(fn, wait) {
  let timerId = null

  return function() {
    if (timerId) {
      clearTimeout()
      timerId = null
    }
  
    timerId = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}