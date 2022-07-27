/* 
选择排序
*/

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min])
        min = j;
    }
    if (min !== i)
      [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.time('selectSort');
console.log(selectSort([1, 3, 2]));
console.timeEnd('selectSort');