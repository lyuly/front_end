class Events {
  constructor() {
    this.events = {}
  }

  on(name, callback) {
    if (!this.events) this.events = {}
    if (this.events[name]) {
      this.events[name].push(callback)
    } else {
      this.events[name] = [callback]
    }
  }

  once(name, callback) {
    const _ = this
    function One(...args) {
      callback.call(this, ...args)
      _.off(name, One)
    }
    _.on(name, One)
  }

  emit(name, ...data) {
    if (this.events[name]) {
      this.events[name].forEach(item => {
        item.call(this, ...data)
      })
    }
  }

  off(name, callback) {
    if (this.events[name]) {
      const index = this.events[name].indexOf(callback)
      this.events[name].splice(index, 1)
    }
  }
}

const myEvent = new Events()

myEvent.on("some-event", (msg) => {
  console.log("i am listening", msg);
});
myEvent.once("some-event", (msg) => {
  console.log("i just listen-once", msg);
});
myEvent.emit("some-event", "listen to me");
myEvent.emit("some-event", "listen to me");