#!/usr/bin/env bun

async function randomDelay(id: number) {
  const delay = Math.random() * 1000
  return new Promise((resolve) => setTimeout(() => {
    console.log(`${id} finished`);
    resolve(id);
  }, delay))
}

async function foo() {
  const t0 = Date.now();
  for (let i = 0; i < 5; i++) {
    await randomDelay(i);
  }
  console.log(`${Date.now() - t0}ms elapsed`);
}

foo();