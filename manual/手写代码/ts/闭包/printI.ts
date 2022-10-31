#!/usr/bin/env bun

for (let i = 0; i < 5; i++) {
  (function() {
    setTimeout(() => {
      console.log(i);
    });
  }())
}