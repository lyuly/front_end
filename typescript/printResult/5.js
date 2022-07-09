"use strict";
console.time('5');
const promise5 = new Promise((resolve, reject) => {
    resolve('success1');
    reject('error');
    resolve('success2');
});
promise5.then((res) => {
    console.log('then:', res);
}).catch((err) => {
    console.log('catch', err);
});
console.timeEnd('5');
