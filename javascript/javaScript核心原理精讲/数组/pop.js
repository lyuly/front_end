#!/usr/bin/env node

/* 
pop实现
*/

Array.prototype.myPop = function() {
  let O = Object(this)
  let len = this.length >>> 0
  if (len === 0) {
    O.length = 0
    return undefined
  }
  --len
  let value = O[len]
  delete O[len]
  O.length = len
  return value
}

const a = [1, 2, 3]
console.log(a.myPop())