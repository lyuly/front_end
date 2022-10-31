#!/usr/bin/env bun

import TreeNode from "./Tree";

const arr = [1, 4, 0, 3, 5];
let root = new TreeNode(2);

for (let item of arr) {
  root.add(item, root);
}

const res = [];

const inOrder = (node) => {
  if (!node)  return;
  inOrder(node.left);
  res.push(node.val);
  inOrder(node.right);
}

// inOrder(root);
// console.log(res);

const inOrder2 = (root) => {
  if (!root)  return;
  const stk = [];
  while (stk.length > 0 || root) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    if (stk.length > 0) {
      root = stk.pop();
      res.push(root.val);
      root = root.right;
    }
  }
}

inOrder2(root);
console.log(res);