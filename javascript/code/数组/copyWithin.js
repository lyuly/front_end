/* 
copyWithin()浅复制数组的一部分到同一数组中的另一个位置，并返回它，原数组长度不变
copyWithin(target, start, end)
*/
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.copyWithin(0, 2, 4));