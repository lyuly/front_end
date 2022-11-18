const { SyncHook, SyncBailHook } = require("tapable")

// SyncHook 同步钩子，按照注册顺序逐个调用回调
// SyncBailHook 同步钩子，但是具有熔断机制，一旦返回undefined，后面的就不继续执行了
/* const sleep = new SyncHook()

sleep.tap("test", () => {
  console.log("callback A")
})

sleep.call() */

class Somebody {
  constructor() {
    this.hooks = {
      sleep: new SyncHook(),
      eat: new SyncBailHook()
    }
  }
  sleep() {
    this.hooks.sleep.call()
  }

  eat() {
    return this.hooks.eat.call()
  }
}

const person = new Somebody()

person.hooks.sleep.tap("test", () => {
  console.log("callback A")
})

person.hooks.sleep.tap("test", () => {
  console.log("callback B")
})

person.hooks.sleep.tap("test", () => {
  console.log("callback C")
})

person.sleep()

person.hooks.eat.tap("test1", () => {
  console.log("callback1 A")
  return "返回值A"
})

person.hooks.eat.tap("test1", () => {
  console.log("Callback1 B")
})

console.log(person.eat())