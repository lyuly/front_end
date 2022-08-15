#!/usr/bin/env node
async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function foo() {
  const pre = Date.now();
  await sleep(1000);
  console.log(Date.now() - pre);
}

foo();