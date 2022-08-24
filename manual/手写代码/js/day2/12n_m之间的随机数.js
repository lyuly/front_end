#!/usr/bin/env bun

function shufflenm(n, m) {
  if (n > m) {
    [n, m] = [m, n];
  }
  const element = Math.floor(Math.random() * (m - n)) + n;
  return element;
}

console.log(shufflenm(2, 8));