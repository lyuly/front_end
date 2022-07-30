/* 
at()方法接收一个整数值并返回该索引的项目，允许正数和负数。
最后一个元素，可以使用array.at(-1)
*/

const arr = [1, 3, 2, 4];
console.log(`1处的值是: ${arr.at(1)}`);
console.log(`-1处的值是: ${arr.at(-1)}`);