// 插入排序
const insertSort = (arr: number[], from: number, to: number): void => {
  for (let i: number = from + 1; i < to + 1; i++) {
    let key: number = arr[i], j: number = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = key;
  }
}

// 快速排序
const quickSort = (arr: number[], from: number, to: number): void => {

  const parition = (arr: number[], from: number, to: number): number => {
    let i: number = from, j: number = to + 1;
    let v: number = arr[from];
    while (true) {
      while (arr[i++] < v)  if (i === to) break;
      while (arr[j--] > v) if (j === from)  break;
      if (i >= j) {
        break;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[from], arr[j]] = [arr[j], arr[from]];
    return j;
  }

  if (to - from <= 10) {
    insertSort(arr, from, to);
  } else {
    const j = parition(arr, from, to);
    quickSort(arr, from, j - 1);
    quickSort(arr, j + 1, to);
  }
}

console.time('sort');
const arr = [1, 10, 2, 4, 3, 6, 7, 5, 8, 9, 0];
// quickSort(arr, 0, arr.length - 1);
insertSort(arr, 0, arr.length - 1);
console.log(arr);
console.timeEnd('sort');