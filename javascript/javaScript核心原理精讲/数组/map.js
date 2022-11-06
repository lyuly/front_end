#!/usr/bin/env node

/* 
map实现
*/

Array.prototype.myMap = function(callbackFn, thisArg) {
  if (!this || this === undefined) {
    throw new TypeError("cannot read property 'map' of null")
  }
  if (Object.prototype.toString.call(callbackFn) !== "[object Function]") {
    throw new TypeError(callbackFn + 'is not a function')
  }
  let O = Object[this]
  let T = thisArg

  let len = O.length >>> 0
  let A = new Array(len)
  for (let k = 0; k < len; k++) {
    if (k in O) {
      let kValue = O[k]
      let mappedValue = callbackFn.call(T, kValue, k, O)
      A[k] = mappedValue
    }
  }
  return A
}

const arr = [1, 2, 3]
function fn(a) {
  return a === 1
}
console.log(arr.map(fn))