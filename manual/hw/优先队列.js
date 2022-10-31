#!/usr/bin/env node

class Priority {
  
  constructor(compare) {
    if (typeof compare !== 'function') {
      throw new Error('compare function required!');
    }

    this.data = [];
    this.compare = compare;
  }

  // 二分查找 插入位置
  search(target) {
    let lo = 0, hi = this.data.length;
    while (lo < hi) {
      let mid = lo + ((hi - lo) >> 1);
      if (this.compare(this.data[mid], target) > 0) {
        hi = mid;
      }
      else {
        lo = mid + 1;
      }
    }
    return lo;
  }

  // 添加
  push(a) {
    const index = this.search(a);
    this.data.splice(index, 0, a);
    return this.data.length;
  }

  // 取出最优元素
  pop() {
    return this.data.pop();
  }

  // 查看最优元素
  peek() {
    return this.data[this.data.length - 1];
  }

  // 返回长度
  size() {
    return this.data.length;
  }
}


const p = new Priority((a, b) => a - b);
p.push(5);
p.push(2);
p.push(1);
p.push(4);
p.push(1);
console.log(p.data);
console.log(p.peek());