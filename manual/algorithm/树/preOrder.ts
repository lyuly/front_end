import TreeNode from "./Tree";

const preOrder = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (!root)  return res;
    res.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return res;
}

const arr = [1, 2, 3, 4, 5];
let root: TreeNode | null = new TreeNode(arr.shift());
let node = root;

node.left = new TreeNode(arr.shift());
node.right = new TreeNode(arr.shift());
node = node.left;
node.left = new TreeNode(arr.shift());
node.right = new TreeNode(arr.shift());
console.log(preOrder(root));