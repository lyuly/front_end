#!/usr/bin/env bun

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const fs = require('fs');
const line = fs.readFileSync('test.txt', 'utf-8').toString().split(/\r\n|\r|\n/);
let a = line[0];
let treeData = JSON.parse(a);

let res = [];

const dfs = (root, res) => {
  if (!root)  return res;
  res.push(root.val);
  dfs(root.left, res);
  dfs(root.right, res);
}
console.time('dfs');
dfs(treeData, res);
console.log(res);
console.timeEnd('dfs')

const preOrder = (root) => {
  let res  = [];
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return res;
}

console.time('preOrder');
console.log(preOrder(treeData));
console.timeEnd('preOrder');

const preOrder2 = (root) => {
  let res = [];
  let stack = [];
  let node = root;
  while (stack.length > 0 || node) {
    while (node) {
      res.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;   
  }
  return res;
}

console.time('preOrder2');
console.log(preOrder2(treeData));
console.timeEnd('preOrder2');