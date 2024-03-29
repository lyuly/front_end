#!/usr/bin/env node

/* 
bind
bind(this, args1, args2)
*/

Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('this must be a function')
  }

  let self = this
  let fbound = function() {
    self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)))
  }
  if (this.prototype) {
    fbound.prototype = Object.create(this.prototype)
  }
  return fbound
}