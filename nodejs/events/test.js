/* 
发布订阅
*/

class MyEmitter {
  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    if (!this.events) this.events = {};
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }

    if (eventName !== 'newListener')
      this.emit('newListener', eventName);
  }

  emit(eventName, ...callback) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(element => {
        element.call(this, ...callback);
      });
    }
  }

  once(eventName, callback) {
    const vm = this;
    function onTime(...args) {
      callback.call(this, ...args);
      vm.off(eventName, onTime);
    }
    vm.on(eventName, onTime);
  }

  off (eventName, callback) {
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(callback);
      this.events[eventName].splice(index, 1);
    }
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('someevent', (msg) => {
  console.log('I am listening', msg);
})
myEmitter.once('someevent', (msg) => {
  console.log('I listen once', msg);
})
myEmitter.emit('someevent', 'listening to me');
myEmitter.emit('someevent', 'listening to me');