#!/usr/bin/env node

/* 

*/

function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left), prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}

// console.log(myInstanceOf([1, 2, 3], Array));


class Priority {
  constructor(compare) {
    this.data = [];
    this.compare  = compare;
  }

  // 二分查找
  search(target) {
    let lo = 0, hi = this.data.length;
    while (lo < hi) {
      const mid = lo + ((hi - lo) >> 1);
      if (this.compare(this.data[mid], target) > 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  }

  // 添加元素
  push(target) {
    const index = this.search(target);
    this.data.splice(index, 0, target);
    return this.data.length;
  }

  // 删除
  pop() {
    return this.data.pop();
  }

  // 取最大的优先级的元素
  peek() {
    return this.data[this.data.length - 1];
  }

  // 长度
  size() {
    return this.data.length;
  }
}

const courses = [[3,2],[4,3]]

var scheduleCourse = function(courses) {
  let sum = 0, p = new Priority((a, b) => a - b);
  for (let i = 0; i < courses.length; i++) {
    const [ti, di] = courses[i];
    sum += ti;
    p.push(ti);
    if (sum > di) {
      sum -= p.pop();
    }
  }
  return p.size();
};

// console.log(scheduleCourse(courses));


const partition = (arr, lo, hi) => {
  let i = lo, j = hi + 1;
  let v = arr[lo];
  while (true) {
    while (arr[++i] < v)  if (i === hi) break;
    while (arr[--j] > v)  if (j === lo) break;
    if (i >= j) {
      break;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[lo], arr[j]] = [arr[j], arr[lo]];
  return j;
}

const quickSort = (arr, lo, hi) => {
  if (hi <= lo) return;
  const j = partition(arr, lo, hi);
  quickSort(arr, lo, j - 1);
  quickSort(arr, j + 1, hi);
}

const a = [1, 4, 2, 5, 3];
quickSort(a, 0, a.length - 1);
console.log(a);

/* 
new操作符
1. 创建一个空对象
2. 将对象的原型指向构造函数的原型
3. 将函数的this指向这个对象，i并执行构造函数的代码
4. 判断返回值的类型，如果是值类型，则返回这个对象，如果是引用类型，则返回这个引用类型的对象
*/

function objectFactory() {
  let newObj = null, constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== 'function') {
    throw new Error('type error');
  }

  let result = null;
  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj, arguments);
  let flag = result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObj;
}

/* 
防抖：
事件在n秒后被触发，如果在n秒内被触发，则重新计时
*/

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

/* 
节流：
在指定的时间内，事件只能被触发一次
*/

function throttle(fn, delay) {
  let cur = Date.now();

  return function() {
    let context = this, args = arguments;
    let now = Date.now();
    if (now - cur >= delay) {
      cur = Date.now();
      return fn.apply(context, args);
    }
  }
}

Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    console.error('type error');
  }

  context = context || window;
  let args = [...arguments].slice(1), result = null;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    console.error('type error');
  }

  context = context || window;
  let result = null;
  context.fn = this;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    console.error('type error');
  }

  let args = [...arguments].slice(1), fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

function deepCopy(obj, map = new Map()) {
  if (!obj || typeof obj !== 'object')  return obj;

  if (map.has(obj)) {
    return map.get(obj);
  }

  let newObj = Array.isArray(obj) ? [] : {};

  const keys = [...Object.getOwnPropertySymbols(obj), ...Object.keys(obj)];
  
  map.set(obj, newObj);

  for (const key of keys) {
    const val =  obj[key];
    newObj[key] = deepCopy(val, map);
  }
  return newObj;
}

const obj = {
  name: 'pig',
  age: 19,
  salary: {
    all: 380000,
    month: 24000
  }
}

console.log(deepCopy(obj));

function uncompress(str) {
  if (!str) {
    return str;
  }

  let res = '';
  const nums = [];
  const stk = [];
  let num = 0;

  for (const ch of str) {
    if (!isNaN(parseInt(ch))) {
      num = num * 10 + parseInt(ch);
    } else if (ch === '(') {
      stk.push(res);
      res = '';
      nums.push(num);
      num = 0;
    } else if (ch === ')') {
      res = stk.pop() + res.repeat(nums.pop());
    } else {
      res += ch;
    }
  }
  return res;
}

console.log(uncompress('3(ab)'));
console.log(uncompress('3(ab2(c))'));