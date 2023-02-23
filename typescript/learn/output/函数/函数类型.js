#!/usr/bin/env bun
"use strict";
function add(x, y) {
    return x + y;
}
let myAdd = function (x, y) {
    return x + y;
};
function buildName(firstName, ...lastName) {
    return firstName + ' ' + lastName.join(' ');
}
let pname = buildName('Bob', 'Smith', 'Tomas');
console.log(pname);
const sum1 = (x, y) => x * y;
console.log(sum1(1, 2));
