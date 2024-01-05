// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

var isValidBST = function(root) {

  const dfs = (node, left, right) => {
    if (!node) return true

    const isValid = node.val > left && node.val < right
    if (!isValid) return false

    const isLeftValid = dfs(node.left, left, node.val)
    const isRightValid = dfs(node.right, node.val, right);

    return isLeftValid && isRightValid
  }

  return dfs(root, -Infinity, Infinity);
};