// call实现
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof context !== "function") {
    throw new TypeError('error');
  }

  // 获取参数
  let result = null, args = [...arguments].slice(1);

  // 判断context是否传入，没有的话设置为window
  context = context || window;
  // 将调用函数设置为对象
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 删除属性
  delete context.fn;
  return result;
}

// apply实现
Function.prototype.myApply = function(context) {
  // 判断调用对象
  if (typeof context !== 'function') {
    throw new TypeError("error");
  }

  // 获取参数
  let result = null;

  // 判断context是否传入，没有的话设置为window
  context = context || window;
  // 将调用函数设置为对象
  context.fn = this;
  // 调用函数
  if (arguments[1])
    result = context.fn(...arguments[1]);
  else
    result = context.fn();
  // 删除属性
  delete context.fn;
  return result;
}

// bind函数
Function.prototype.myBind = function(context) {
  // 判断调用对象
  if (typeof context !== 'function') {
    throw new TypeError('error');
  }

  return function Fn() {
    // 根据调用方式，传入不同的值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  }
}

// 函数柯里化
function curry(fn, args) {
  // 获取函数需要的长度
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // 拼接得到现有的参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已满足所需参数的长度
    if (subArgs.length >= length)
      return fn.apply(this, subArgs);
    else {
      return curry.call(this, fn, subArgs);
    }
  }
}

// 浅拷贝
function shallowCopy(object) {
  if (!object || typeof object !== 'object')  return;

  let newObject = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key))
      newObject[key] = object[key]
  }
  return newObject;
}

// 深拷贝
function deepCopy(object) {
  if (!object || typeof object !== 'object')  return;

  let newObject = Array.isArray(object) ? [] : {};

  for (let key of object) {
    if (object.hasOwnProperty(key))
      newObject[key] = typeof object[key] === 'object' ? deepCopy(object[key]) : object[key]
  }
  return newObject;
}

// 数组扁平化
function flatten1(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]))
      result = result.concat(flatten(arr[i]))
    else {
      result.push(arr[i]);
    }
  }
  return result;
}

function flatten2(arr) {
	return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, [])
}

