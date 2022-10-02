#!/usr/bin/env bun

class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.hashMap = {};
    this.capacity = capacity;
    this.count = 0;
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    let node = this.hashMap[key];
    if (!node)  return -1;
    this.removeFromList(node);
    this.addToHead(node);
    return node.val;
  }

  put(key, value) {
    let node = this.hashMap[key];
    if (!node) {
      if (this.count === this.capacity) {
        this.removeLRUItem();
      }
      let newNode = new ListNode(key, value);
      this.hashMap[key] = newNode;
      this.addToHead(newNode);
      this.count++;
    } else {
      node.value = value;
      this.removeFromList(node);
      this.addToHead(node);
    }
  }

  addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeFromList(node) {
    let t1 = node.prev;
    let t2 = node.next;
    t1.next = t2;
    t2.prev = t1;
  }

  removeLRUItem() {
    let tail = this.popTail();
    delete this.hashMap[tail.key];
    this.count--;
  }

  popTail() {
    let tail = this.tail.prev;
    this.removeFromList(tail);
    return tail;
  }
}

console.time('lru');
let lRUCache = new LRUCache(2);
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