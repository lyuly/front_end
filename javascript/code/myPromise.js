class MyPromise {
  constructor(executor) {
    this.status = 'pending';
    this.result = null;
    this.callbacks = [];
    const self = this;
    
    function resolve(data) {
      if (self.status !== 'pending')  return;
      // promise状态已完成
      self.status = 'fullfilled';
      self.result = data;
      setTimeout(() => {
        self.callbacks.forEach((value) => {
          value.onResolved(data);
        })
      })
    }

    function reject(data) {
      if (self.status !== 'pending')  return;
      // promise状态已完成
      self.status = 'rejected';
      self.result = data;
      setTimeout(() => {
        self.callbacks.forEach((value) => {
          value.onRejected(data);
        })
      })
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onResolved, onRejected) {
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
      // 封装函数
      function callback(type) {
        try {
          let result = type(self.result());
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

      // 调用回调函数
      if (this.status === 'fullfilled') {
        setTimeout(() => {
          callback(onResolved);
        })
      }

      if (this.status === 'rejected') {
        setTimeout(() => {
          callback(onRejected);
        })
      }

      if (this.status === 'pending') {
        this.callbacks.push({
          onResolved: function() {
            callback(onResolved);
          },
          onRejected: function() {
            callback(onRejected);
          }
        })
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
      reject(reason);
    })
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      let count = 0;
      let arr = [];
      for (let i = 0; i < promises.length; i++) {
        promises[i].then( v => {
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
    });
  }
}