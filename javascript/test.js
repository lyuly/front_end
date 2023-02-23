// var a = 3
// function c() {
//   // alert(a)
// }

// (function() {
//   var a = 4
//   c()
// })()

// (function(n) {
    // console.log(n)
// })(1)

// for (var i = 0; i < 5; i++) {
//   (function(x) {
//     setTimeout(() => {
//       console.log(x)
//     }, i * 1000)
//   })(i)
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
// }

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

function sum(a, b) {
  return a + b
}

let res = curry(sum)
console.log(res(1)(2))