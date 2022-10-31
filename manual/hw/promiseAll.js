#!/usr/bin/env node

/* 
传入数组，所有的resolve才会成功
最先遇到的rejected，就报错
*/

function all(promises) {
  return new Promise((resolve, rejected) => {
    let count = 0;
    const arr = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        count++;
        arr[i] = v;
        if (count === promises.length) {
          resolve(arr);
        }
      }, r => {
        rejected(r);
      })
    }
  })
}