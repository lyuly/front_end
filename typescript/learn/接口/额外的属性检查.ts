#!/usr/bin/env bun

interface Person {
  name?: string;
  age?: number;
}

function fn(config: Person): {name: string, age: number} {
  let newP = {name: 'pig', age: 1};
  if (config.name) {
    newP.name = config.name;
  }

  if (config.age) {
    newP.age = config.age;
  }

  return newP;
}

let p = fn({name: 'fff', age: 18} as Person);
console.log(p);