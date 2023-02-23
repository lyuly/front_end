#!/usr/bin/env bun
"use strict";
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity1([1, 2, 3]));
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'm'));
