// 用于判断构造函数的prototype属性是否出现在对象的原型链上
function myInstance(left, right) {
  let proto = Object.getPrototypeOf(left),
  prototype = right.prototype

  while (true) {
    if (!proto) return false
    if (proto === prototype)  return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstance([], Array)) // true
console.log(myInstance({}, Object)) // true

console.log(Object.prototype.toString.call('1'))
console.log(Object.prototype.toString.call({}))
console.log(Object.prototype.toString.call(new Date()))


console.log(typeof 1)
console.log(typeof '1')
console.log(typeof {})
console.log(typeof [])
