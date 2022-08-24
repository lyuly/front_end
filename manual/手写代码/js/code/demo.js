#!/usr/bin/env bun

// 防抖：事件在n秒后被触发，如果在这n秒内又被触发，则重新计时
function debounce(fn, wait) {
  let timer = null;
  return function() {
    let context = this, args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}

// 节流：在一段时间内只能被触发一次
function throttle(fn, delay) {
  let cur = Date.now();
  return function() {
    let context = this, args = arguments, now = Date.now();
    if (now - cur >= delay) {
      cur = Date.now();
      return fn.apply(context, args);
    }
  }
}
/* 
new
1. 首先创建一个空对象
2. 设置原型，将对象的原型函数设置为函数的prototype对象
3. 让函数的this指向这个对象，执行构造函数的代码
4. 判断函数的返回类型，如果是值类型，则返回创建的对象，如果是引用类型，则返回引用类型的对象
*/
function ObjectFactory() {
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);

  if (typeof constructor !== 'function') {
    console.error('type error');
    return
  }

  let result = null;
  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj, arguments);
  let flag = result && (typeof result === 'function' || typeof result === 'object');
  return flag ? result : newObj;
}

/* 
call
1. 首先判断调用对象是否为函数
2. 判断传入上下文对象是否存在，如果不存在，设为window
3. 处理传入参数，截取第一个参数后的所有值
4. 将函数作为上下文对象的一个属性
5. 使用这个上下文对象来调用这个放，并保存返回结果
*/
Function.prototype.MyCall = function(context) {
  if (typeof context !== 'function') {
    console.error('type error');
    return
  }

  let args = [...arguments].slice(1), result = null;
  context = context || window;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
}


/* 
apply
1.判断调用对象是否为函数
2.判读传入的上下文对象是否存在，不存在，则设置为window
3.将函数作为上下文对象的一个属性
4.判断参数值是否传入
5.使用上下文对象来调用这个方法，并保存返回结果
6.删除刚才新增的属性 
*/
Function.prototype.MyApply = function(context) {
  if (typeof context !== 'function') {
    console.error('type error');
    return
  }

  let args = arguments[1], result = null;
  context = context || window;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
}


/* 
bind
1.判断调用对象是否为函数
2.保存当前函数的引用，获取其余传入参数值
3.创建一个函数返回
4.函数内部使用apply来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的this给apply调用，其余情况都传入指定的上下文对象
*/
Function.prototype.myBind = function(context) {
  if (typeof context !== 'function') {
    console.error('type error');
    return
  }

  let args = [...arguments].slice(1), fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  }
}

/* 
instanceOf
作用：用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
1. 首先获取类型的原型
2. 然后获得对象的原型
3. 然后一直循环判断对象的原型是否等于类型的原型，直达对象原型为null
*/

function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left),
  prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype)  return true;
    proto = Object.getPrototypeOf(proto);
  }
}

const n = 1;
const s = 'abc123';
const obj = {
  name: 'yy',
  age: 18
}
const arr = [1, 2, 3];

console.log(myInstanceOf(n, Number));
console.log(myInstanceOf(s, String));
console.log(myInstanceOf(obj, Object));
console.log(myInstanceOf(arr, Array));


module.exports = debounce;