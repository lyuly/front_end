#!/usr/bin/env bun

interface Person {
  name: string;
  age: number;
}

const obj: Person = {
  name: 'pig',
  age: 18
}
const {name, age} = obj
// console.log(name);
// console.log(age);

function mutiple(...args) {
  console.log(args);
  let res: number = 0;
  for (let item of args) {
    res += item;
  }
  return res;
}

console.log(mutiple(1, 2, 3, 4));