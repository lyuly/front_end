/* 
filter方法会创建一个新数组，其包含通过所提供测试的所有元素
*/

const arr = ['word', 'apple', 'banana', 'activate', 'employee'];
console.log(arr.filter(x => x.length > 4)); // [ 'apple', 'banana', 'activate', 'employee' ]