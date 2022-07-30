/* 
findLast方法返回数组中满足提供的测试函数条件的最后一个元素的值，没有找到对应元素，就返回undefined
*/

const arr = [5, 12, 13, 4, 0];

console.log(arr.findLast((e) => e > 5));