#!/usr/bin/env bun

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let g = gen();
// console.log(g.next().value);

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let gen = idMaker();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);