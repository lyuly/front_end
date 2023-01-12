// js数据类型 null undefined Number String Boolean Symbol BigInt Object

/* 
判断数据类型的方法
typeof 只能判断基本类型
instanceof 只能判断引用类型
constructor 容易被修改，不安全
Object.prototype.toString.call()
*/

console.log(typeof 1)
console.log(typeof true)
console.log(typeof 'abc')
console.log(typeof Symbol('hk'))
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof BigInt(1))
console.log(typeof {name: 'pig'})

function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  
  while (true) {
    if (!proto) return false
    if (proto === prototype)  return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceOf([1], Array))
console.log(Object.prototype.toString.call([1]))

/* 
判断一个变量是不是数组
Array.is([1])
[1] instanceof Array
Object.prototype.toString.call()
[1, 2, 3].constructor === Array
*/

/* 
== 宽松相等 需要转换
=== 严格相等
*/


/* 
事件机制
DOM0  事件注册
DOM2  事件捕获 事件冒泡 事件处理
IE  事件冒泡 事件处理
*/

/* 
e.preventDefault()阻止默认预设
*/

/* 
js中this是如何工作的
1.函数调用
2.方法调用
3.构造器调用
4. call apply bind能改变普通函数的this指向，改不了箭头函数的
*/

/* 
new关键字原理
1.创建一个新对象
2.将对象的原型指向构造函数的prototype对象
3.将函数的this指向这个对象，执行构造函数的代码
4.判断返回值的类型，如果是值类型，则返回这个对象，如果是引用类型，则返回引用类型的对象
*/

function objectFactory() {
  let newObj = null, result = null
  let constructor = Array.prototype.shift.call(arguments)

  if (typeof constructor !== 'function') {
    throw new TypeError('type error')
  }

  newObj = Object.create(constructor.prototype)
  result = constructor.apply(newObj, arguments)
  let flag = result && (typeof result === 'object' || typeof result === 'function')
  return flag ? result : newObj
}

Function.prototype.myCall = function(context, ...args) {
  context = context || global || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myApply = function(context, args) {
  context = context || global || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myBind = function(context, ...args) {
  let self = this
  return function fn() {
    return self.apply(
      this instanceof fn ? this : context, args.concat(...arguments)
    )
  }
}

/* 
原型链继承
构造函数继承
组合继承
寄生继承
寄生组合继承
原型式继承
*/

/* 
闭包：指有权访问另一个函数作用域中变量的函数
作用域链：全局作用域和函数作用域、局部作用域
*/

/* 
let const var
块级 块级   全局
要声明 要声明并有初值 无需
暂时性死区 暂时性死区 无
指针指向 无  指针指向
变量提升无 无     有
无    无     全局
无    无     重复声明
*/

/* 
var
匿名函数
直接写
*/

/* 
柯里化
*/

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      fn.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(...args2))
      }
    }
  }
}

/* 
同端口 同域名 同协议
*/

