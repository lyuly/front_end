function All(promises) {
  return new Promise((resolve, reject) => {
    const arr = []
    let count = 0
    promises.forEach((promise, index) => {
      promise.then((v) => {
        arr[index] = v;
        count++;
        if (count === promises.length) {
          resolve(arr);
        }
      }, r => {
        reject(r);
      })
    })
  })
}

function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(v => {
        resolve(v);
      }, r => {
        reject(r);
      })
    })
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve(1), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve(2), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve(3), 3000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(reject(4), 1000);
})

All([p3, p1, p2]).then(r => {
  console.log(r);
})

race([p3, p1, p2, p4]).then(r => {
  console.log(r);
})

let promise = Promise.resolve();

function serial(promises) {

  for (let i = 0; i < promises.length; i++) {
    promise = promise.then(promises[i]);
  }
  return promise
}

serial([p3, p1, p2])
.then(() => {
  console.log('finished');
})