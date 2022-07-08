class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function reverseList1(head: ListNode | null): ListNode | null {
  if (!head)  return head;
  let pre: ListNode | null = null, cur: ListNode | null = head;
  while (cur) {
      let node: ListNode | null = cur.next;
      cur.next = pre;
      pre = cur;
      cur = node;
  }
  return pre;
};

function reverseList2(head: ListNode | null): ListNode | null {
  if (!head || !head.next)  return head;
  const p: ListNode | null = reverseList2(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};