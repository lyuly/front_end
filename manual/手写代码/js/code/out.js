#!/usr/bin/env bun

const person = { name: 'ly'};

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

// sayHi.call(person, 21);
// sayHi.bind(person, 21);

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

// console.log(a[b]);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());  // TypeError