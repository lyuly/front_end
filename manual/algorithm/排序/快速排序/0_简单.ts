// 随机生成number类型数组
import randomArr from "../../randomArr"

const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1)
    return arr
  let left: number[] = [];
  let right: number[] = [];
  let pivot = arr[0];
  for (let i:number = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.time('quickSort');
const arr: number[] = randomArr(10);
console.log(quickSort(arr));
console.timeEnd('quickSort');
