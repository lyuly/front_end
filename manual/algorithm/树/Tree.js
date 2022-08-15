class TreeNode {

  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  create(val) {
    const root = new TreeNode(val);
    return root
  }

  add(val, node) {
    if (!node)  return this.create(val)
    if (val === node.val)
      return node
    if (val < node.val) {
      if (node.left === null) {
        node.left = this.create(val);
        return node.left
      } else {
        return this.add(val, node.left)
      }
    } else {
      if (node.right === null) {
        node.right = this.create(val);
        return node.right
      } else {
        return this.add(val, node.right)
      }
    }
  }
}

export default TreeNode;