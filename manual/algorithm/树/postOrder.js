#!/usr/bin/env bun

import TreeNode from "./Tree";

const arr = [1, 4, 0, 3, 5];
let root = new TreeNode(2);

for (let item of arr) {
  root.add(item, root);
}

const res = [];

const postOrder = (node) => {
  if (!node)  return;
  postOrder(node.left);
  postOrder(node.right);
  res.push(node.val);
}

postOrder(root);
console.log(res);