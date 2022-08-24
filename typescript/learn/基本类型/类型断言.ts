#!/usr/bin/env bun

let someOne: any = "this is a wonderful thing";
let someLength: number = (someOne as string).length;
console.log(someLength);