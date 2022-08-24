#!/usr/bin/env bun

var a: number = 10;

// function f() {
//   var message: string = 'Hello, world!';
//   return message;
// }

// console.log(a);
// console.log(f());

function fn() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  }
}

var g = fn();
// console.log(g());

function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x: number = 10;
  }
  return x;
}

console.log(f(true));
console.log(f(false));

function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let j = 0; j < currentRow.length; j++) {
      sum += currentRow[j];
    }
  }
  return sum;
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(sumMatrix(arr));

// for (var i = 0; i < 10; i++) {
//   setTimeout(
//     function(){
//       console.log(i);
//     }, 100 * i);
// }

for (var i = 0; i < 10; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  })(i);
}