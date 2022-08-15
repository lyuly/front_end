#!/usr/bin/env bun

import TreeNode from "./Tree";

const arr = [1, 4, 0, 3, 5];
let root = new TreeNode(2);

for (let item of arr) {
  root.add(item, root);
}

const res = [];

const preOrder = (node) => {
  if (!node)  return;
  res.push(node.val);
  preOrder(node.left);
  preOrder(node.right);
}

preOrder(root);
console.log(res);