"use strict";
function sumES5() {
    let sum = 0;
    Array.prototype.forEach.call(arguments, function (item) {
        sum += item * 1;
    });
    return sum;
}
function sumES6(...nums) {
    let sum = 0;
    nums.forEach((item) => sum += item * 1);
    return sum;
}
// console.time('ES5');
// console.log(sumES5(1, 2, 3, 4, 5));
// console.timeEnd('ES5');
console.time('ES6');
console.log(sumES6(1, 2, 3, 4, 5));
console.timeEnd('ES6');
