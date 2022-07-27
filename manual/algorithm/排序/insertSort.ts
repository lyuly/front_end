/* 
插入排序
最优时间复杂度O(n)
平均时间复杂度O(n^2)
最坏时间复杂度O(n^2)
空间复杂度O(n)
*/

import randomArr from '../randomArr'

const insertSort = (a: number[]): void => {
  if (!a) return

  for (let i: number = 1; i < a.length; i++) {
    let key: number = a[i], j: number = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
}

console.time('insertSort');
const arr: number[] = randomArr(10);
insertSort(arr);
console.log(arr);
console.timeEnd('insertSort');