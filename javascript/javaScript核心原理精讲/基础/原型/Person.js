#!/usr/bin/env node

function Person() {}

const person1 = new Person()
const person2 = new Person()

console.log(person1.__proto__)
console.log(person2.__proto__)
