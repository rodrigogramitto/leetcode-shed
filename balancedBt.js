// Given a binary tree, determine if it is
// height-balanced
// .

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

var isBalanced = function(root) {
  return dfs(root) !== -1
};

const dfs = (node) => {
  if (!node) return 0;

  let leftHeight = dfs(node.left)
  let rightHeight = dfs(node.right)

  if (leftHeight === -1 || rigtHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return 1 + Math.max(leftHeight, rightHeight);
}

const TreeNode = function(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

let myTree = new TreeNode(3)
myTree.left = new TreeNode(9)
myTree.right = new TreeNode(20)
myTree.right.left = new TreeNode(15)
myTree.right.right = new TreeNode(7)

let actual1 = isBalanced(myTree) // expect true;

console.log(actual1)