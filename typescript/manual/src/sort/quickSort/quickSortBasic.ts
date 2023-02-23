export const quickSortBasic = <T>(arr: Array<T>): Array<T> => {
  const n = arr.length
  if (n <= 1) {
    return arr
  }
  let left: Array<T> = [], right: Array<T> = []
  let pivot = arr[0]
  for (let i = 1; i < n; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i])
  }
  return [...quickSortBasic(left), pivot, ...quickSortBasic(right)]
}