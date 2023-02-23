// 改进版的冒泡排序

export const bubbleImp = <T>(arr: Array<T>): Array<T> => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let flag = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
  return arr
};
