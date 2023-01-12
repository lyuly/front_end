#!/usr/bin/env node

let a = {
  name: 'lee',
  age: 18
}

let b = a
console.log(a.name)
b.name = 'son'
console.log(a.name)
console.log(b.name)

function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

let num = 10;
let obj1 = {item: "unchanged"};
let obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);

function flatEach(arr) {
  let res = []
  arr.forEach(element => {
    if (Array.isArray(element)) {
      res = res.concat(flatEach(element))
    } else {
      res.push(element)
    }
  });
  return res
}

console.log(flatEach([1, [2, [3, 4]]]))

function parition(arr, lo, hi) {
  let v = arr[lo], i = lo, j = hi + 1
  while (true) {
    while(arr[++i] < v) if (i === hi) break
    while (arr[--j] > v)  if (j === lo) break
    if (i >= j) {
      break
    }
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  [arr[lo], arr[j]] = [arr[j], arr[lo]]
  return j
}

function quickSort(a, lo, hi) {
  if (lo >= hi) {
    return
  }

  const j = parition(a, lo, hi)
  quickSort(a, lo, j - 1)
  quickSort(a, j + 1, hi)
}

const a1 = [5, 0, 3, 2, 1, 4]
// quickSort(a1, 0, a1.length - 1)
// console.log(a1)

function threeQuickSort(a, lo, hi) {
  if (lo >= hi) return

  let lt = lo, gt = hi, i = lo + 1, v = a[lo]

  while (i <= gt) {
    const cmp = a[i] > v ? 1 : -1
    if (cmp < 0) {
      [a[lt], a[i]] = [a[i], a[lt]]
      lt++
      i++
    } else if (cmp > 0) {
      [a[gt], a[i]] = [a[i], a[gt]]
      gt--
    } else {
      i++
    }
  }
  threeQuickSort(a, lo, lt - 1)
  threeQuickSort(a, gt + 1, hi)
}

threeQuickSort(a1, 0, a1.length - 1)
console.log(a1)