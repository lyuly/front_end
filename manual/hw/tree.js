#!/usr/bin/env bun

/* 
构建二叉搜索树
*/

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left !== null ? left : null;
    this.right = right !== null ? right : null;
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = val;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

const minLen = (node) => {
  if (!node) {
    return 0;
  }

  if (!node.left && !node.right) {
    return 1;
  }

  let min_depth = Number.MAX_SAFE_INTEGER;
  if (node.left) {
    min_depth = Math.min(minLen(node.left), min_depth);
  }
  if (node.right) {
    min_depth = Math.min(minLen(node.right), min_depth);
  }
  return min_depth + 1;
}

console.log(minLen(BST.root));