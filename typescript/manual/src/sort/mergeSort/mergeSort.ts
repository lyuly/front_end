/* 
归并排序，稳定的排序O(nlogn)
*/

export const merge = <T>(left: Array<T>, right: Array<T>): Array<T> => {
  const res: Array<T> = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift()!)
    } else {
      res.push(right.shift()!)
    }
  }
  while (left.length) {
    res.push(left.shift()!)
  }
  while (right.length) {
    res.push(right.shift()!)
  }
  return res
}

export const mergeSort = <T>(arr: Array<T>): Array<T> => {
  const n = arr.length
  if (n < 2)
    return arr
  let middle = Math.floor(n / 2)
  let left = arr.slice(0, middle), right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}