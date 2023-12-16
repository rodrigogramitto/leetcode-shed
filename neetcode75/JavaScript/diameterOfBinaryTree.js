// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.


// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1

var diameterOfBinaryTree = function(root) {
 let diameter = 0;
 if (!root) return diameter;

  let dfs = (node) => {
    if (!node) return - 1;
    let left = dfs(node.left);
    let right = dfs(node.right);
    diameter = Math.max(diameter, (2 + left  + right));
    return 1 + Math.max(left, right);
  }
  dfs(root);
  return diameter;
};

const TreeNode = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right = new TreeNode(3);

let diameter = diameterOfBinaryTree(tree);
console.log(diameter);