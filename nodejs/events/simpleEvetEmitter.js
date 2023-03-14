class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, ...args) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach(listener => listener(...args));
    }
  }

  off(eventName, listener) {
    const listeners = this.events[eventName];
    if (listeners) {
      this.events[eventName] = listeners.filter(l => l !== listener);
    }
  }

  once(eventName, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}

const emitter = new EventEmitter();

emitter.once('event1', () => console.log('event1 fired once'));

emitter.emit('event1'); // 输出：event1 fired once
emitter.emit('event1'); // 没有输出
