export const shellSort = <T>(arr: Array<T>): Array<T> => {
  const n = arr.length
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let j = i, key = arr[i]
      while (j - gap >= 0 && key < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = key
    }
  }
  return arr
}