#!/usr/bin/env node

async function async1() {
  console.log(1)
  return await 1 + 1
}

console.log(async1())