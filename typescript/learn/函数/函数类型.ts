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

let name = buildName('Bob', 'Smith', 'Tomas');
console.log(name);