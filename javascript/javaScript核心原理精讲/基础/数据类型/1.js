#!/usr/bin/env node

let a = {
  name: 'lee',
  age: 18
}

let b = a
console.log(a.name)
b.name = 'son'
console.log(a.name)
console.log(b.name)