/* 
二分搜索
*/

// import randomArr from '../../randomArr'

const sort = (arr: number[], target: number) => {
  if (arr.length === 0) return - 1;
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] > target) hi = mid - 1;
    else if (arr[mid] < target) lo = mid + 1;
    else  return mid;
  }
  return -1;
}

console.time('binarySearch');
const arr: number[] = [1, 2, 3, 4, 5];
console.log(`数组是: ${arr}`);
const res: number = sort(arr, 1);
console.log(`搜索结果: ${res}`);