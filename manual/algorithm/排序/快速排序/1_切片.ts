// 随机生成number类型数组
import randomArr from "../../randomArr";

// 切片
const partition = (a: number[], lo: number, hi: number): number => {
  let i:number = lo, j:number = hi + 1;
  let v:number = a[lo];
  while (true) {
    while (a[++i] < v) if (i === hi)  break
    while (v < a[--j])  if (j === lo) break
    if (i >= j)
      break
    [a[i], a[j]] = [a[j], a[i]]
  }
  [a[lo], a[j]] = [a[j], a[lo]]
  return j
}

const quickSort = (a: number[], lo: number, hi: number): void => {
  if (hi <= lo) return
  let j = partition(a, lo, hi)
  quickSort(a, lo, j - 1)
  quickSort(a, j + 1, hi)
}

console.time('quickSort')
const arr = randomArr(10)
quickSort(arr, 0, arr.length - 1)
console.log(arr)
console.timeEnd('quickSort')