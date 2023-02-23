#!/usr/bin/env bun
"use strict";
class Calculator {
    initValue;
    add;
}
let calculator = new Calculator();
calculator.initValue = 0;
calculator.add = function (a, b) {
    return a + b;
};
console.log(calculator.add(1, 2));
