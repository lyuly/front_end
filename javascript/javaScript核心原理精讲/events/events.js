#!/usr/bin/env node

/* 
在发布订阅模式基础上，在目标和观察者之间增加了一个调度中心
*/

class myEventEmitter {
  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    if (!this.events) {
      this.events = {}
    }
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }

    if (eventName !== "newListener") {
      this.emit("newListener", eventName)
    }
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((item) => {
        item.call(this, ...args)
      })
    }
  }

  once(eventName, callback) {
    const self = this
    function oneTime(...args) {
      callback.call(this, ...args)
      self.off(eventName, oneTime)
    }
    self.on(eventName, oneTime)
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(callback)
      this.events[eventName].splice(index, 1)
    }
  }
}

function hello(name) {
  console.log("hello", name)
}

const eventEmitter = new myEventEmitter()
// eventEmitter.on('say', hello)
// eventEmitter.emit('say', 'John')
// eventEmitter.emit('say', 'mike')
eventEmitter.once('say', hello)
eventEmitter.emit('say', 'pig')
eventEmitter.emit('say', 'David')