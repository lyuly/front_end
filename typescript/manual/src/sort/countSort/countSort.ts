/* 
计数排序
*/

export const countSort = (arr: Array<number>): Array<number> => {
  let max = Math.max(...arr)
  const nums = new Array(max + 1), n = arr.length

  for (let i = 0; i < n; i++) {
    if (!nums[arr[i]]) {
      nums[arr[i]] = 0
    }
    nums[arr[i]]++
  }

  let sortedIndex = 0

  for (let i = 0; i < max + 1; i++) {
    while (nums[i] > 0) {
      arr[sortedIndex++] = i
      nums[i]--
    }
  }
  return arr
}