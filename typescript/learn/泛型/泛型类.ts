#!/usr/bin/env bun

class Calculator<T> {
  initValue: T;
  add: (x: T, y: T) => T;
}

let calculator = new Calculator<number>();
calculator.initValue = 0;
calculator.add = function(a, b) {
  return a + b;
}

console.log(calculator.add(1, 2));