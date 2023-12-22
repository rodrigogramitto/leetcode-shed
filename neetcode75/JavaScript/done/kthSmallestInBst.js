// Given the root of a binary search tree,
// and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

var kthSmallest = function(root, k) {
  let values = [];
  if (!root) return null;

  dfs_inorder(root, values);
  // values.sort((a, b ) => a - b);
  return values[k - 1];
};

const dfs_inorder = (node, results) => {
  if (node.left) dfs_inorder(node.left, results);
  results.push(node.val);
  if (node.right) dfs_inorder(node.right, results);
}

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