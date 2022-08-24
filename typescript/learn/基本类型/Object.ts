#!/usr/bin/env bun

interface Person {
  name: string;
  age: number;
  sex?: string;
}

const obj: Person = {
  name: 'nnn',
  age: 18
}

console.log(obj.name);
console.log(obj['name']);

let key: keyof Person;

for (key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(element);
  }
}