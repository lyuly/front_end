#!/usr/bin/env bun

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3, 4];

interface Arr {
  [key: number]: number
}

const arr: Arr = [1, 2, 3]

console.log(list);
console.log(list2);