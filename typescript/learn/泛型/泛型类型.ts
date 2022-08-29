#!/usr/bin/env bun

/* 
泛型函数的类型与非泛型函数的类型没什么不同 ，只是有一个类型参数在最前面
*/

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;

// 泛型接口

interface Info<T> {
  (arg: T): T;
}

function build<T>(age: T): T {
  return age;
}

let myAge: Info<number> = build;
console.log(myAge(10));