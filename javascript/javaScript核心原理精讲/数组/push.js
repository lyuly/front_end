#!/usr/bin/env node

Array.prototype.myPush = function(...items) {
  let O = Object(this)
  let len = this.length >>> 0
  let argCount = items.length >>> 0
  if ((len + argCount) > 2 ** 53 - 1) {
    throw new Error('the number of array is over the max value')
  }
  for (let i = 0; i < argCount; i++) {
    O[len + i] = items[i]
  }
  let newLength = len + argCount
  O.length = newLength
  return newLength
}

const a = []
a.myPush(1, 2, 3)
console.log(a)