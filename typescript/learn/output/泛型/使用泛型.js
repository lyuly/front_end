#!/usr/bin/env bun
"use strict";
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
const arr = loggingIdentity([1, 2, 3, 4, 5]);
console.log(`arr: ${arr}`);
