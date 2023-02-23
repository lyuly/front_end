#!/usr/bin/env bun
"use strict";
/*
泛型函数的类型与非泛型函数的类型没什么不同 ，只是有一个类型参数在最前面
*/
function identity(arg) {
    return arg;
}
let myIdentity = identity;
function build(age) {
    return age;
}
let myAge = build;
console.log(myAge(10));
