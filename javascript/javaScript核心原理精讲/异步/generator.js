#!/usr/bin/env node

/* 
交出函数的执行权
*/

function* gen(x) {
  var y = yield x + 2
  return y
}

let g = gen(1)
console.log(g.next().value)
console.log(g.next(2).value)