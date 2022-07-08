function sumES5(): number {
  let sum: number = 0;
  Array.prototype.forEach.call(arguments, function(item: number):void {
    sum += item * 1;
  })
  return sum;
}

function sumES6(...nums: number[]): number {
  let sum: number = 0;
  nums.forEach((item) => sum += item * 1)
  return sum;
}

// console.time('ES5');
// console.log(sumES5(1, 2, 3, 4, 5));
// console.timeEnd('ES5');

console.time('ES6');
console.log(sumES6(1, 2, 3, 4, 5));
console.timeEnd('ES6');