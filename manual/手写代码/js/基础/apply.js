/* 

*/

Function.prototype.myApply = function(context) {
  if (typeof context != 'function') {
    throw new Error('type error');
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
  return result
}