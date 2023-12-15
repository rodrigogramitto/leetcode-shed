// Given the root of a binary tree, return the preorder traversal of its nodes' values.


// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

var preorderTraversal = function(root) {
  let values = [];

  if (!root) return values;

  let traverse = (node) => {
    values.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);

  return values
};

const treeNode = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let myTree = new treeNode(1);
myTree.right = new treeNode(2);
myTree.right.left = new treeNode(3);

let values = preorderTraversal(myTree);

console.log(values) // expect [1,2,3];