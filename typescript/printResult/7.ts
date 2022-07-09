const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000);
});

const promise71 = promise7.then(() => {
    throw new Error('error!!!');
});
console.log('promise7', promise7);
console.log('promise71', promise71);
setTimeout(() => {
    console.log('promise7', promise7);
    console.log('promise71', promise71);
}, 2000);