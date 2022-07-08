// instanceOf实现
function MyInstanceOf(left, right) {
  // 获取左边的原型
  let proto = Object.getPrototypeOf(left),
    prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

MyInstanceOf([1, 2, 3], Array);
MyInstanceOf({ name: 'mmmd', age: 89 }, Object);
MyInstanceOf(1, Number);
MyInstanceOf('1', Number);

// 手写new操作符
// 1. 新建一个空对象
// 2. 设置原型，将对象的原型设置为构造函数的对象
// 3. 让函数的this指向这个对象，执行构造函数的代码
// 4. 判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，返回引用类型的对象
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  if (typeof constructor !== 'function') {
    console.error('error');
    return;
  }
  newObject = Object.create(constructor.prototype);
  result = constructor.apply(newObject, arguments);
  let flag =
    result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObject;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj = objectFactory(Person, 'mmmd', 89);
console.log(obj);

// 手写Promise.all
function all(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let arr = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        count++;
        arr[i] = v;
        if (count === promises.length) {
          resolve(arr);
        }
      }, e => {
        reject(e);
      })
    }
  })
}

// 防抖：一个事件在触发n秒后执行回调，如果在这n秒内又触发则重新计时
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

// 节流：在指定的时间内只能被触发一次
function throttle(fn, delay) {
  let curTime = Date.now();

  return function() {
    let nowTime = Date.now(), context = this, args = arguments;

    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  }
}

/* 
call:
1. 首先调用对象是否是函数
2. 判断传入的上下文是否存在，不存在的话设置为window
3. 处理传入的参数，截取第一个参数后的所有参数
4. 将函数作为上下文对象的一个属性
5. 使用上下文来调用这个对象，并返回结果
6. 删除新增的属性
*/

Function.prototype.myCall = function(context) {
  if (typeof context !== 'function') {
    console.error('type error');
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
1. 首先判断调用对象是否是函数
2. 判断传入的上下文参数是否存在，不存在的话设置为window
3. 将函数作为上下文对象的一个属性
4. 判断参数是否传入
5. 使用上下文对象调用这个方法，并保存返回结果
6. 删除刚才的属性
*/

Function.prototype.myApply = function(context) {
  if (typeof context !== 'function') {
    console.error('type error');
  }

    let result = null;
    context = context || window;
    context.fn = this;

    if (arguments[1]) {
      result = context.fn(...arguments[1]);
    } else {
      result = context.fn();
    }
    delete context.fn;
    return result;
}

/* 
bind
1. 首先判断传入的对象是否是函数
2. 获取传入的参数
3. 创建一个函数返回
4. 函数内部使用apply来绑定函数调用
*/

Function.prototype.myBind = function(context) {
  if (typeof context !== 'function') {
    throw new TypeError('error');
  }
  let args = [...arguments].slice(1), fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}

// 深拷贝
function DeepCopy(obj) {
  if (!obj || typeof obj !== 'object')  return;

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.hasOwn(obj, key))
      newObj[key] = typeof obj[key] === 'object' ? DeepCopy(obj[key]) : obj[key];
  }

  return newObj();
}

DeepCopy([1,2,3])

// 数组乱序
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  const index = Math.round(Math.random() * (arr.length - 1 - i)) + i;
  [arr[i], arr[index]] = [arr[index], arr[i]];
}

console.log(arr);

// 千分位划分
function splitNum(n) {
  const num = n.toString();
  let decimal = num.indexOf('.') > -1 ? num.split('.')[1] : '';
  let len = num.length;
  if (len <= 3) {
    return num;
  } else {
    let t = decimal ? '.' + decimal : decimal;
    let remain = len % 3;
    if (remain > 0) {
      return num.slice(0, remain) + ',' + num.slice(remain, len).match(/\d{3}/g).join(',') + t;
    } else {
      return num.slice(0, len).match(/\d{3}/g).join('') + t;
    }
  }
}

splitNum(123456789.123);
