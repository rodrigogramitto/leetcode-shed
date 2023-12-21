// Given the root of a binary search tree,
// and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

var kthSmallest = function(root, k) {
  let values = [];
  if (!root) return null;
  const dfs = (node) => {
    values.push(node.val);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  values.sort((a, b ) => a - b);
  return values[k - 1];
};

const TreeNode = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let myTree = new TreeNode(3);
myTree.left = new TreeNode(1);
myTree.left.right = new TreeNode(2);
myTree.right = new TreeNode(4);

let kth = kthSmallest(myTree, 3) // expect 3

console.log(kth);