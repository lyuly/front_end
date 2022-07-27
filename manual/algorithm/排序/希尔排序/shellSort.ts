/* 
希尔排序
使数组中任意间隔为h的元素都是有序的
对于每个h，用插入排序将h个子数组独立地排序
*/

import randomArr from '../../randomArr'

const shellSort = (a: number[]) => {
  let n : number = a.length;
  let h: number = 1;
  while (h < Math.floor(n / 3))
    h = h * 3 + 1;
  while (h >= 1) {
    for (let i: number = h; i < n; i++) {
      // 插入排序
      for (let j: number = i; j >= h && a[j] < a[j - h]; j -= h) {
        [a[j], a[j - h]] = [a[j - h], a[j]];
      }
    }
    h = Math.floor(h / 3);
  }
}

console.time('shellSort');
const arr = randomArr(10);
console.log(`排序前: ${arr}`);
shellSort(arr);
console.log(`排序后: ${arr}`);
console.timeEnd('shellSort');