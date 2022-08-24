Array.prototype.myPush = function() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
}

const arr = [];
arr.myPush(1, 2, 3);
console.log(arr);