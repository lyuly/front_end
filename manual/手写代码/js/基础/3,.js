#!/usr/bin/env bun

function format1(n) {
  return Intl.NumberFormat().format(n);
}

console.log(format1('123456789'));