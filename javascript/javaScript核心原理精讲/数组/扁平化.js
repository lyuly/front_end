#!/usr/bin/env node

/* 
1. 递归实现
*/

var a = [1, [2, [3, 4, 5]]]

function flatten(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten(a))

/* 
2. reduce实现
*/

function flatten2(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten2(next) : next)
  }, [])
}

console.log(flatten2(a))

/* 
some实现
*/

function flatten3(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten3(a))


/* 
split和toString实现
*/

function flatten4(arr) {
  return arr.toString().split(',').map(Number)
}

console.log(flatten4(a))