Function.prototype.myCall = function(context, ...args) {
  if (typeof context !== 'function') {
    throw new Error('type error')
    return
  }

  context = context || global || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}