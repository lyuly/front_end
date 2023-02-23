class myPromise {
  constructor(executor) {
    this.state = 'pending'
    this.result = null
    this.callbacks = []

    const self = this

    // resolve函数
    function resolve(data) {
      if (self.state !== 'pending')  return
      self.state = 'fullfilled'
      self.result = data
      setTimeout(() => {
        self.callbacks.forEach(item => {
          item.onResolved(data)
        })
      })
    }

    function reject(data) {
      if (self.state !== 'pending') return
      self.state = 'rejected'
      self.result = data
      setTimeout(() => {
        self.callbacks.forEach(item => {
          item.onRejected(data)
        })
      })
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(e)
    }
  }

  then(onResolved, onRejected) {
    const self = this
    if (typeof onRejected !== 'function') {
      onRejected = (reason) => {
        throw reason
      }
    }

    if (typeof onResolved !== 'function') {
      onResolved = (value) => {
        throw value
      }
    }

    return new Promise((resolve, reject) => {
      function callback(type) {
        try {
          let result = type(self.result)
          if (result instanceof myPromise) {
            result.then(v => {
              resolve(v)
            }, r => {
              reject(r)
            })
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }

      if (this.state === 'fullfilled') {
        setTimeout(() => {
          callback(onResolved)
        })
      }

      if (this.state === 'rejected') {
        setTimeout(() => {
          callback(onRejected)
        })
      }

      if (this.state === 'pending') {
        this.callbacks.push({
          onResolved: function() {
            callback(onResolved)
          },
          onRejected: function() {
            callback(onRejected)
          }
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof myPromise) {
        value.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      } else {
        resolve(value)
      }
    })
  }

  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      let count = 0, arr = []
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          v => {
            count++;
            arr[i] = v
            if (count === promises.length) {
              resolve(arr)
            }
          },
          r => {
            reject(r)
          }
        )
      }
    })
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          resolve(v)
        },
        r => {
          reject(r)
        })
      }
    })
  }
}