// Given the root of a binary tree, return the postorder traversal of its nodes' values.

//  Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

var postorderTraversal = function(root) {
  let values = [];

  if (!root) return values;

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    values.push(node.val);
  };
  traverse(root);

  return values;
};

const treeNode = function(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

let myTree = new treeNode(1);
myTree.right = new treeNode(2);
myTree.left = new treeNode(3);

let values = postorderTraversal(myTree);
console.log(values) // expect [3,2,1];