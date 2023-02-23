Array.prototype.myPush = function() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i]
  }
  return this.length
}

let array = []
array.myPush(1, 2, 3)
console.log(array)