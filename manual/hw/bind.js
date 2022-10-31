#!/usr/bin/env node

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new Error('type error');
    return;
  }

  const args = [...arguments].slice(1), fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
}

const mo = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = mo.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.myBind(mo);
console.log(boundGetX());
// expected output: 42