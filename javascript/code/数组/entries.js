/* 
entries()返回一个新的数组迭代对象，对象包含数组中的每个索引的键/值对
*/

const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
// console.log(iterator.next().value);

for (const e of iterator) {
  console.log(e);
}