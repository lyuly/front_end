function fn(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('任务完成', t, new Date());
      resolve({t, data: new Date()});
    }, t * 1000);
  })
}

function limitQueueFn(arr, limit, handleFn) {
  // 完成任务数
  let count = 0;

  const run = () => {
    new Promise((resolve, reject) => {
      const value = arr[count];
      count++;
      resolve(handleFn(value));
    }).then(() => {
      if (count < arr.length) {
        run()
      }
    })
  };

  for (let i = 0; i < limit; i++) {
    run();
  }

}

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3]

limitQueueFn(arr, 3, fn)