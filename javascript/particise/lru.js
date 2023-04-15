class LRU {
  constructor(len) {
    this.map = new Map();
    this.len = len;
  }

  get(key) {
    if (this.map.size !== 0) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  set(key, value) {
    if (this.map.size >= this.len) {
      this.map.delete(this.map.keys().next().value);
      this.map.set(key, value);
    } else {
      this.map.set(key, value);
    }
  }
}

const lru = new LRU(3);
console.log(lru.map);
lru.set(1, 1);
console.log(lru.map);
lru.set(2, 2);
console.log(lru.map);
lru.set(3, 3);
console.log(lru.map);
console.log(lru.get(1));
console.log(lru.map);
lru.set(4, 4);
console.log(lru.map);