#!/usr/bin/env bun

let hello = 'Hello!';

function f(input: boolean) {
  let a: number = 100;

  if (input) {
    let b: number = a + 1;
    return b;
  }

  return b;
}

console.log(f(true));
// console.log(f(false));

function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
      var currentRow = matrix[i];
      for (let i = 0; i < currentRow.length; i++) {
          sum += currentRow[i];
      }
  }

  return sum;
}

const arr1: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(sumMatrix(arr1));

for (let i = 0; i < 10 ; i++) {
  setTimeout(function() {console.log(i); }, 100 * i);
}