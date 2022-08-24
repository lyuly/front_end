const arr = [1, [2, [3, [4]]]];

function flat(arr, d) {
  return d > 0 ? arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur, d - 1) : cur), []) : arr.slice();
}

console.log(flat(arr, Infinity));

function forFlat(arr, d) {
  const res = [];

  (function flat(arr, d) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flat(item, d - 1);
      } else {
        item !== void 0 && res.push(item);
      }
    }
  })(arr, d);
  return res;
}

console.log(forFlat(arr, Infinity));