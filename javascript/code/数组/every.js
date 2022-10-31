/* 
every()方法测试一个数组内的所有元素是否都能通过某个指定的测试，返回一个布尔值
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr.every(x => x > 1)); // false
console.log(arr.every(x => x > 0)); // true