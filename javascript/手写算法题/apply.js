Function.prototype.myApply = function(context, args) {
  if (typeof context) {
    throw new TypeError('type error')
    return
  }

  context = context || global || window
  context.fn = args
  let result = context.fn(...args)
  delete context.fn
  return result
}