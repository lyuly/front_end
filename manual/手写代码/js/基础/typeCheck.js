/* 
typeof检测原始数据类型
检测Number Boolean String Object undefined
*/

console.log(typeof 1);
console.log(typeof false);
console.log(typeof 'abc');
console.log(typeof {name: 'pig'});
console.log(typeof undefined);

console.log('*******************************');
/* 
instanceof用于对象
判断在其原型链中能否找到该类型的原型
*/
console.log(2 instanceof Number);
console.log('1' instanceof String);
console.log(true instanceof Boolean);
console.log([] instanceof Array);
console.log({name: 'ping'} instanceof Object);
console.log(function a(){} instanceof Function);

console.log('*******************************');
/* 
constructor
1. 判断数据的类型
2. 对象实例通过constructor对象访问它的构造函数
*/

console.log((2).constructor === Number);
console.log((true).constructor === Boolean);
console.log(('abc').constructor === String);
console.log(([]).constructor === Array);
console.log((function() {}).constructor === Function);
console.log(({}.constructor === Object));

console.log('*******************************');
/* 
Object.prototype.toString.call()
适用基本类型和正则表达式
*/

console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call('1'));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(/\d/));