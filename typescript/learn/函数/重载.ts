#!/usr/bin/env bun

function Person(p: {name: string, age: number}[]): number;
function Person(name: string, age: number);
function Person(p): any {
  if (typeof p === 'object') {
    let ans = Math.floor(Math.random() * p.age);
    return ans;
  }

  else if (typeof p === 'number') {
    let ans = Math.floor(p / 13);
    return { p: ans, age: p};
  }
}