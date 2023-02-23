#!/usr/bin/env bun

function PersonC(p: {name: string, age: number}[]): number;
function PersonC(name: string, age: number): void;
function PersonC(p: any): any {
  if (typeof p === 'object') {
    let ans = Math.floor(Math.random() * p.age);
    return ans;
  }

  else if (typeof p === 'number') {
    let ans = Math.floor(p / 13);
    return { p: ans, age: p};
  }
}