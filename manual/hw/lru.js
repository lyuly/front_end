#!/usr/bin/env node

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
    this.capacity = capacity;
    this.count = 0;
    this.hash = {};
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  // 获取这个key，并返回值
  get(key) {
    let node = this.hash[key]
    if (!node)  return -1;
    this.moveToHead(node);
    return node.val;
  }

  // 放入
  push(key, val) {
    let node = this.hash[key];
    if (!node) {
      if (this.count === this.capacity) {
        this.removeLRUItem();
      }
      let newNode = new ListNode(key, val);
      this.hash[key] = newNode;
      this.addToHead(newNode);
      this.count++;
    } else {
      node.val = val;
      this.moveToHead(node);
    }
  }

  moveToHead(node) {
    this.removeFromList(node);
    this.addToHead(node);
  }

  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }

  removeFromList(node) {
    let t1 = node.prev;
    let t2 = node.next;
    t1.next = t2;
    t2.prev = t1;
  }

  removeLRUItem() {
    let tail = this.popTail();
    delete this.hash[tail.key];
    this.count--;
  }

  popTail() {
    let tail = this.dummyTail.prev;
    this.removeFromList(tail);
    return tail;
  }
}

console.time('lru');
let lRUCache = new LRUCache(2);
lRUCache.push(1, 1);
lRUCache.push(2, 2);
console.log(lRUCache.get(1));
lRUCache.push(3, 3);
console.log(lRUCache.get(2));
lRUCache.push(4, 4);
console.log(lRUCache.get(1));
console.log(lRUCache.get(3));
console.log(lRUCache.get(4));
console.timeEnd('lru');