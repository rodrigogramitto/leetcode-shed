// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia:
// “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”

// Example 1:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

var lowestCommonAncestor = function(root, p, q) {

  while (true) {
    if (root.val < p && root.val < q) {
      root = root.right
    } else if (root.val > p && root.val > q) {
      root = root.left
    } else {
      return root;
    }
  }
};



const Tree = function(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

const myTree = new Tree(6);
myTree.left = new Tree(2)
myTree.left.left = new Tree(0);
myTree.left.right = new Tree(4)
myTree.left.right.left = new Tree(3)
myTree.left.right.right = new Tree(5)
myTree.right = new Tree(8)
myTree.right.left = new Tree(7)
myTree.right.right = new Tree(9);


let actual1 = lowestCommonAncestor(myTree, 2, 1);

console.log(actual1);