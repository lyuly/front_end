/* 
插入排序
*/

export const insertSort = <T>(arr: Array<T>): Array<T> => {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    let key = arr[i], j = i - 1
    for (; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = key
  }
  return arr
}