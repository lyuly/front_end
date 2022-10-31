// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1');
// })
// console.log('1', promise1);

// const promise2 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success');
//   console.log(2);
// });
// promise2.then(() => {
//   console.log(3);
// });
// console.log(4);

// const promise3 = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise3.then(() => {
//   console.log(3);
// });
// console.log(4);

// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1');
//   resolve('resolve1');
// })
// const promise2 = promise1.then(res => {
//   console.log(res);
// })
// console.log('1', promise1);
// console.log('2', promise2);

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success');
// }))
// fn().then(res => {
//   console.log(res);
// })
// console.log('start');

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success');
//   });
// console.log("start");
// fn().then(res => {
//   console.log(res);
// });

// console.log('start');
// setTimeout(() => {
//   console.log('time')
// })
// Promise.resolve().then(() => {
//   console.log('resolve')
// })
// console.log('end');

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })

// const promise2 = promise1.then(() => {
  // throw new Error('error!!!')
// })

// console.log('promise1', promise1);
// console.log('promise2', promise2);

// setTimeout(() => {
//   console.log('promise1', promise1);
//   console.log('promise2', promise2);
// }, 2000)

// Promise.reject(1)
// .then(res => {
//   console.log(res);
//   return 2;
// })
// .catch(err => {
//   console.log(err);
//   return 3;
// })
// .then(res => {
//   console.log(res);
// });
