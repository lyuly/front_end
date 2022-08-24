#!/usr/bin/env bun

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

console.log(c);

enum Word {A = 1, B, C}
let wordName: string = Word[2];
console.log(Word[3]);