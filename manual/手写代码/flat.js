#!/usr/bin/env bun
const flatDeep = (arr, d) => {
  return d > 0 ? arr.reduce((arr, val) => arr.concat(Array.isArray(val)
    ? flatDeep(val, d - 1) : val), []) : arr.slice();
};

const a = [1, 2, [3, 4, [5, [6, 7, [8, [9, [0]]]]]]];
console.time('flatDeep');
console.log(flatDeep(a, Infinity));
console.timeEnd('flatDeep');

const eachFlat = (arr, d) => {
  const res = [];
  (function flat(arr, d) {
    arr.forEach(element => {
      // 控制递归深度
      if (Array.isArray(element) && d > 0) {
        // 递归数组
        flat(element, d - 1);
      } else {
        // 缓存元素
        res.push(element);
      }
    });
  })(arr, d)
  return res;
}
console.time('eachFlat');
console.log(eachFlat(a, Infinity));
console.timeEnd('eachFlat');

const forFlat = (arr, d) => {
  const res = [];
  (function flat(arr, d) {
    for (let item of arr) {
      if (Array.isArray(item) && d > 0) {
        flat(item, d - 1)
      } else {
        // 去除空元素，添加非undefined元素
        item !== void 0 && res.push(item);
      }
    }
  })(arr, d);
  return res;
}
console.time('forFlat');
console.log(forFlat(a, Infinity));
console.timeEnd('forFlat');

console.time('flat');
console.log(a.flat(Infinity));
console.timeEnd('flat');

console.time('flatMap');
console.log([1, [2, 3]].flatMap(x => x));
console.timeEnd('flatMap');

const randomNumber = (a, b) => {
  if (a > b)
    [a, b] = [b, a]
  return Math.floor(Math.random() * (b - a) + a);
}

console.log(randomNumber(1, 10));