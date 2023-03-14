#!/usr/bin/env bun

/* 
手写instanceof
*/

export const myInstanceof = (left: any, right: any): boolean  => {
  let proto = Object.getPrototypeOf(left), prototype = right.prototype

  while (true) {
    if (!proto) return false
    if (proto === prototype)  return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceof([], Array))