// var funcs = []

// for (var i = 0; i < 5; i++) {
//   funcs.push(function() {
//     return i;
//   })
//   console.log(funcs[i]());
// }

// funcs.forEach((func) => {
//   console.log(func());
// })
// console.log('----------------');

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000)
}

console.log('-------------');

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  })
}