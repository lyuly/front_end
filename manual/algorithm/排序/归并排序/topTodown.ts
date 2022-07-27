/* 
自顶向下的归并排序
*/

import randomArr from "../../randomArr";

const merge = (a: number[], lo: number, mid: number, hi: number) => {
  let i: number = lo, j: number = mid + 1;
  let auk: number[] = new Array(a.length).fill(0);

  for (let k: number = 0; k <= hi; k++) {
    auk[k] = a[k];
  }

  for (let k: number = lo; k <= hi; k++) {
    if (i > mid)  a[k] = auk[j++];
    else if (j > hi)  a[k] = auk[i++];
    else if (auk[j] < auk[i]) a[k] = auk[j++];
    else  a[k] = auk[i++];
  }
}

const sort = (a: number[], lo: number, hi: number) => {
  if (hi <= lo) return
  let mid: number = lo + Math.floor((hi - lo) / 2);
  sort(a, lo, mid);
  sort(a, mid + 1, hi);
  merge(a, lo, mid, hi);
}

console.time('topTodown');
const arr = randomArr(10);
console.log(`排序前: ${arr}`);
sort(arr, 0, arr.length - 1);
console.log(`排序后: ${arr}`);
console.timeEnd('topTodown');