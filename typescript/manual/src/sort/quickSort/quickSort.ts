export const parition = <T>(arr: Array<T>, lo: number, hi: number): number => {
  let i: number = lo, j: number = hi + 1, v: T = arr[lo]
  while (true) {
    while (arr[++i] < v) if (i === hi)  break
    while (arr[--j] > v)  if (j === lo) break
    if (i >= j) {
      break
    }
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  [arr[lo], arr[j]] = [arr[j], arr[lo]]
  return j
}

export const quickSort = <T>(arr: Array<T>, lo: number, hi: number) => {
  if (hi <= lo) return arr
  let j = parition(arr, lo, hi)
  quickSort(arr, lo, j - 1)
  quickSort(arr, j + 1, hi)
}