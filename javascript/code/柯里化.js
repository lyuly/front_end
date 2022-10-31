// 函数柯里化是一种将多个参数的一个函数转换成一系列使用一个参数的函数的技术

function curry(fn, args) {
  // 获取需要的参数的长度
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // 拼接得到现在的参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否应满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 满足
      return fn.apply(this, subArgs);
    } else {
      // 不满足，递归返回柯里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}

// es6实现
function curry1(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}
