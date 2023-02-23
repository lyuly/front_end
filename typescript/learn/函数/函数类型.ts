#!/usr/bin/env bun

function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number {
  return x + y;
}

function buildName(firstName: string, ...lastName: string[]): string {
  return firstName + ' ' + lastName.join(' ');
}

let pname = buildName('Bob', 'Smith', 'Tomas');
console.log(pname);

interface Fn {
  (key1: number, key2: number): number
}

const sum1: Fn = (x, y) => x * y

console.log(sum1(1, 2));
