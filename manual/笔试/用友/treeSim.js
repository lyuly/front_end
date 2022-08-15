#!/usr/bin/env bun
/* 
是否具有相同序列的叶子节点
*/
const fs = require('fs');
const line = fs.readFileSync('a.txt', 'utf-8').toString().split(/\r\n|\r|\n/);
const [a, b] = line[0].split(' ');
console.log(line);
// console.log(a);
// console.log('--------------');
// console.log(b);

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let rootA = JSON.parse(a);
let rootB = JSON.parse(b);

function buildTree(root) {
  let node = new TreeNode(root.val);
  if (root.left) {
    node.left = buildTree(root.left);
  }
  if (root.right) {
    node.right = buildTree(root.right);
  }
  return node;
}

function leafChild(root) {
  let A = buildTree(root);
  let res = [];
  let stack = [];
  stack.push(A);
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    if (!node.left && !node.right) {
      res.push(node.val);
    }
  }
  return res;
}

let resA = leafChild(rootA);
let resB = leafChild(rootB);

console.log(resA.toString() === resB.toString());