function throttle(fn, delay) {
  let now = Date.now()

  return function() {
    let cur = Date.now()
    if (cur - now >= delay) {
      now = Date.now()
      return fn.apply(this, arguments)
    }
  }
}