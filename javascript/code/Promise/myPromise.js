class MyPromise {
  constructor(executor) {
    this.status = 'pending';
    this.result = null;
    this.callbacks = [];
    const self = this;

    // resolve函数
    function resolve(data) {
      if (self.status !== 'pending')  return;
      // 修改状态值
      self.status = 'fullfilled';
      self.result = data;
      // 调用成功的回调函数
      setTimeout(() => {
        self.callbacks.forEach(v => {
          v.onResolved(data);
        })
      })
    }

    // reject函数
    function reject(data) {
      if (self.status !== 'pending')  return;
      // 修改状态值
      self.status = 'rejected';
      self.result = data;
      setTimeout(() => {
        self.callbacks.forEach(v => {
          v.onRejected(data);
        })
      })
    }

    try {
      // 同步调用
      executor(resolve, reject);
    } catch (error) {
      // 修改 promise 对象状态为失败
      reject(e)
    }
  }

  then(onResolved, onRejected) {
    // 判断是否是回调函数
    const self = this;
    if (typeof onResolved !== 'function') {
      onResolved = value => {
        throw value;
      }
    }

    if (typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason;
      }
    }

    return new Promise((resolve, reject) => {
      function callback(type) {
        try {
          let result = type(self.status);

          if (result instanceof Promise) {
            result.then(v => {
              resolve(v);
            }, e => {
              reject(e);
            })
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }

      if (this.status === 'fullfilled') {
        setTimeout(() => {
          callback(onResolved);
        });
      }

      if (this.status === 'rejected') {
        setTimeout(() => {
          callback(onRejected);
        });
      }

      if (this.status === 'pending') {
        this.callbacks.push({
          onResolved: function() {
            callback(onResolved);
          },
          onRejected: function() {
            callback(onRejected);
          }
        });
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(v => {
          resolve(v);
        }, r => {
          reject(r);
        })
      } else {
        resolve(value);
      }
    })
  }

  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value);
    })
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      let count = 0;
      let arr = [];
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          count++;
          arr[i] = v;
          if (count === promises.length) {
            resolve(arr);
          }
        }, r => {
          reject(r);
        })
      }
    })
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          resolve(v);
        }, r => {
          reject(r);
        })
      }
    })
  }
}

MyPromise.resolve().then(() => {
  return new Error('error!!!')
}).then(res => {
  console.log("then: ", res)
}).catch(err => {
  console.log("catch: ", err)
})
