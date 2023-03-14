#!/usr/bin/env bun

/* 
实现延时函数
*/

export const sleep = async(time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}

async function foo(time: number) {
  const now = Date.now();
  await sleep(time);
  console.log(Date.now() - now);
}

foo(5000); // 5s后执行