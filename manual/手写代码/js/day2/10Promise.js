class myPromise{
  constructor(exec) {
    this.state = 'pending';
    this.result = null;
    this.callbacks = [];

    const self = this;

    function resolve(data) {
      if (self.state !== 'pending') return;
      self.state = 'fullfilled';
      self.result = data;
      setTimeout(() => {
        self.callbacks.forEach((item) => {
          item.onResolved(data);
        });
      });
    }

    function reject(data) {
      if (self.state !== 'pending') return;
      self.state = 'rejected';
      self.result = data;
      setTimeout(() => {
        self.callbacks.forEach((item) => {
          item.onRejected(data);
        });
      });
    }

    try {
      exec(resolve, reject);
    } catch(e) {
      reject(e);
    }
  }

  then(onResolved, onRejected) {
    const self = this;
    if (typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason;
      }
    }

    if (typeof onResolved !== 'function') {
      onResolved = value => {
        throw value;
      }
    }

    return new myPromise((resolve, reject) => {
      function callback(type) {
        try {
          let result = type(self.state);

          if (result instanceof myPromise) {
            result.then((v) => {
              resolve(v);
            }, r => {
              reject(r);
            })
          } else {
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      }

      if (self.state === 'fullfilled') {
        setTimeout(() => {
          callback(onResolved);
        })
      }

      if (self.state === 'rejected') {
        setTimeout(() => {
          callback(onRejected);
        })
      }

      if (self.state === 'pending') {
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
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new myPromise((resovle, reject) => {
      if (value instanceof myPromise) {
        value.then(v => {
          resovle(v);
        }, r => {
          reject(r);
        })
      } else {
        resovle(value);
      }
    })
  }

  static reject(reason) {
    return new myPromise((resovle, reject) => {
      reject(reason);
    })
  }

  static all(promises) {
    return new myPromise((resovle, reject) => {
      let arr = [];
      let count = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          count++;
          arr[i] = v;
          if (count === promises.length)
            resovle(arr);
        }, r => {
          reject(r);
        })
      }
    })
  }

  static race(promises) {
    return new myPromise((resolve, reject) => {
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