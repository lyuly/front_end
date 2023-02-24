import { bubbleSort } from "../src/sort/bubbleSort/bubbleSort"
import { bubbleImp } from "../src/sort/bubbleSort/bubbleImp"
import { insertSort } from "../src/sort/insertSort/insertSort"
import { selectSort } from "../src/sort/selectSort/selectSort"
import { shellSort } from "../src/sort/shellSort/shellSort"
import { mergeSort } from "../src/sort/mergeSort/mergeSort"
import { quickSortBasic } from "../src/sort/quickSort/quickSortBasic"
import { quickSort } from "../src/sort/quickSort/quickSort"
import { heapSort } from "../src/sort/heapSort/heapSort"
import { countSort } from "../src/sort/countSort/countSort"

const arr = [1, 4, 3, 2, 0]
const res = [0, 1, 2, 3, 4]

describe('bubbleSort', () => {
  test('arr sort to res', () => {
    expect(bubbleSort(arr)).toEqual(res)
  })
})

describe('bubbleImp', () => {
  test('arr sort to res', () => {
    expect(bubbleImp(arr)).toEqual(res)
  })
})

describe('insertSort', () => {
  test('arr sort to res', () => {
    expect(insertSort(arr)).toEqual(res)
  })
})

describe('selectSort', () => {
  test('arr sort to res', () => {
    expect(selectSort(arr)).toEqual(res)
  })
})

describe('shellSort', () => {
  test('arr sort to res', () => {
    expect(shellSort(arr)).toEqual(res)
  })
})

describe('mergeSort', () => {
  test('arr sort to res', () => {
    expect(mergeSort(arr)).toEqual(res)
  })
})

describe('quickSortBasic', () => {
  test('arr sort to res', () => {
    expect(quickSortBasic(arr)).toEqual(res)
  })
})

describe('quickSort', () => {
  test('arr sort to res', () => {
    quickSort(arr, 0, arr.length - 1)
    const nums = arr
    expect(nums).toEqual(res)
  })
})

describe('heapSort', () => {
  test('arr sort to res', () => {
    expect(heapSort(arr)).toEqual(res)
  })
})

describe('countSort', () => {
  test('arr sort to res', () => {
    expect(countSort(arr)).toEqual(res)
  })
})