#!/usr/bin/env bun

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
  }

  // 建表
  buildList(n) {
    let head = new ListNode(1);
    let p = head;
    for (let i = 2; i <= n; i++) {
      const node = new ListNode(i);
      p.next = node;
      p = p.next;
    }
    return head;
  }

  // 迭代
  reverseList(head) {
    if (!head || !head.next)  return head;
    let cur = head, pre = null;
    while (cur) {
      let t = cur.next;
      cur.next = pre;
      pre = cur;
      cur = t;
    }
    return pre;
  }

  // 递归
  reverseList2(head) {
    if (!head || !head.next)  return head;
    let last = this.reverseList2(head.next);
    head.next.next = head;
    head.next = null;
    return last;
  }
}

const list = new ListNode();
let head = list.buildList(5);

console.log(list.reverseList2(head));