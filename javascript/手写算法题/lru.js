class LRU {
  constructor(len) {
    this.map = new Map();
    this.len = len;
  }
  
  get(key) {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value
    } else {
      return -1
    }
  }
  
  set(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value);
    if (this.map.size > this.len) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}

const lru = new LRU(3);
lru.set(1, 1);
lru.set(2, 2);
lru.set(3, 3);
lru.set(4, 4);
lru.get(4);
console.log(lru.map);