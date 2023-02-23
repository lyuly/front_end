"use strict";
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 2));
