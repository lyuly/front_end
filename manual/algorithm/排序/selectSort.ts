/* 
选择排序
O(n^2)的复杂度
*/

import randomArr from "../randomArr";

const selectSort = (a: number[]) => {
  if (!a) return

  for (let i: number = 0;  i < a.length; i++) {
    let min: number = i;
    for (let j: number = i + 1; j < a.length; j++) {
      if (a[j] < a[min])
        min = j;
    }
    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
    }
  }
}

console.time('selectSort');
const arr: number[] = randomArr(10);
selectSort(arr);
console.log(arr);
console.timeEnd('selectSort');