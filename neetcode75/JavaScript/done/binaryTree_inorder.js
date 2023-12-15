// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]


// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100


// Follow up: Recursive solution is trivial, could you do it iteratively?

let treeNode = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

var inorderTraversal = function(root) {
  let values = [];

  let traverse = (node) => {
    if (node.left) traverse(node.left);
    values.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);

  return values
};

let myTree = new treeNode(1);
myTree.right = new treeNode(2);
myTree.right.left = new treeNode(3);

let inorder = inorderTraversal(myTree);

console.log(inorder);