console.time('1');
const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
})
console.log(4);
console.timeEnd('1');