var len: number

function buildMaxHeap<T>(arr: Array<T>) {
  len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify<T>(arr: Array<T>, i: number) {
  let left = 2 * i + 1, right = 2 * i + 2, largest = i

  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, largest)
  }
}

export const heapSort = <T>(arr: Array<T>): Array<T> => {
  buildMaxHeap(arr)

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]
    len--
    heapify(arr, 0)
  }
  return arr
}