#!/usr/bin/env bun

async function async1() {
  console.log('1');
  await async2();
  console.log('2');
}

async function async2() {
  console.log('2 start');
}

console.log('start');

async1();

setTimeout(() => {
  console.log('okk');
})

new Promise((resolve, reject) => {
  console.log('resolve');
  resolve('promise1');
}).then((res) => {
  console.log(res);
})
console.log('end');