/* 
==
1. 类型判断，类型不等的话，进行类型转换
null undefined true
string number的话 string转number
boolean any boolean转number
object string or number or symbol的话 object转基本类型
*/

console.log(NaN == NaN);
console.log(null == null);
console.log(undefined == undefined);
console.log(null == undefined);
console.log([] == '');
console.log({name:''} == Symbol('name'));

console.log('*******************');

console.log(NaN === NaN);
console.log(null === null);
console.log(undefined === undefined);
console.log(null === undefined);
console.log([] === '');
console.log({name:''} === Symbol('name'));

console.log('*******************');

console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));