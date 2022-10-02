#!/usr/bin/env bun

class LRU {
  
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (this.map.has(key)) {
      const t = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, t);
      return t;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}

console.time('lru');
let lRUCache = new LRU(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1));
lRUCache.put(3, 3);
console.log(lRUCache.get(2));
lRUCache.put(4, 4);
console.log(lRUCache.get(1));
console.log(lRUCache.get(3));
console.log(lRUCache.get(4));
console.timeEnd('lru');