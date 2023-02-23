Function.prototype.myBind = function(context, ...args) {
  if (typeof context !== 'function') {
    throw new TypeError('type error')
  }

  const fn = this

  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}