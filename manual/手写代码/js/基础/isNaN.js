#!/usr/bin/env bun
/* 
isNaN：接收参数后，会尝试将这个参数转换为数值，任何不能被转换成数值的值都会返回true，非数值传入也会返回true
Number.isNaN：会先判断传入参数是否为数字，是数字再继续判断是否为NaN
*/

console.log(isNaN('1'));
console.log(Number.isNaN('1'));