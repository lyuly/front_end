function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left),
    prototype = right.prototype;

    while (true) {
      if (!proto) return false;
      if (proto === prototype) return true;
      proto = Object.getPrototypeOf(proto);
    }
}

console.log([1,2,3], Array);

console.log([1,2,3] instanceof Array)