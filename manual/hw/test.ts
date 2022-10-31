#!/usr/bin/env bun

function uncompress(str: string): string {
  const stk: string[] = [];
  const nums: number[] = [];
  let num: number = 0;
  let res: string = '';

  for (const ch of str) {
    if (!isNaN(parseInt(ch))) {
      num = num * 10 + parseInt(ch);
    } else if (ch === '(') {
      stk.push(res);
      res = '';
      nums.push(num);
      num = 0;
    } else if (ch === ')') {
      res = stk.pop() + res.repeat(nums.pop()!);
    } else {
      res += ch;
    }
  }
  return res;
}

console.log(uncompress('3(ab)'));
console.log(uncompress('3(ab2(c))'));


// 实现sleep函数
function timeout(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}


function shuffleArray<T>(arr: Array<T>): void {
  const n: number = arr.length;
  for (let i: number = 0; i < n; i++) {
    const index = Math.floor(Math.random() * (n - i)) + i;
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}

const a = [1, 2, 3, 4, 5];
shuffleArray(a);
console.log(a);


function flat<T>(arr: Array<T>, d: number) {
  let res: Array<T> = [];

  for (const item of arr) {
    if (Array.isArray(item) && d > 0) {
      res = res.concat(flat(item, d - 1));
    } else {
      res.push(item);
    }
  }
  return res;
}

const a1 = [1, [2, [3, [4]]]];
console.log(flat(a1, Infinity));

function arrayTotree(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  const map = {};
  const res = [];

  for (const item of data) {
    const id = item.id;
    const pid = item.pid;

    if (!map[id]) {
      map[id] = {
        children: []
      }
    }

    map[id] = {
      ...item,
      children: map[id]['children']
    }

    const treeItem = map[id];

    if (pid === 0) {
      res.push(treeItem);
    } else {
      if (!map[pid]) {
        map[pid] = {
          children: []
        }
      }
      map[pid].children.push(treeItem);
    }
  }
  return res;
}

const data = [
  {id: 1, name: '1', pid: 0},
  {id: 2, name: '2', pid: 1},
  {id: 3, name: '3', pid: 1},
  {id: 4, name: '4', pid: 3},
  {id: 5, name: '5', pid: 3},
  {id: 6, name: '6', pid: 2}
];
console.log(arrayTotree(data));