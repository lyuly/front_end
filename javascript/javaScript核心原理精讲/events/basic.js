#!/usr/bin/env node

/* 
on/addListener 注册一个事件
off/removeListener 移除一个事件
once 只触发一次
*/

var events = require('events')
var eventEmitter = new events.EventEmitter()
eventEmitter.on('say', function(name) {
  console.log('Hello', name)
})
eventEmitter.emit('say', 'pig')

function hello(name) {
  console.log('hello', name)
}

eventEmitter.on('hello', hello)
eventEmitter.emit('hello', 'John')
eventEmitter.once('hello', hello)
eventEmitter.emit('hello', 'Mike')
eventEmitter.emit('hello', 'Mike')