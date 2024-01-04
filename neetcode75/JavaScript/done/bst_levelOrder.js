// Given the root of a binary tree, return the level order traversal of its nodes'
// values. (i.e., from left to right, level by level).

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

var levelOrder = function(root) {
  if (!root) return [];

  let [q, res] = [[root], []];

    while (q.length) {
      let val = [];
      let len = q.length

      for (let i = 0; i < len; i++) {
        let node = q.shift();

        if (node) {
          val.push(node.val);
          if (node.left) q.push(node.left)
          if (node.right) q.push(node.right);
        }
      }

      if (val.length) res.push(val);
    }
  return res
};

const TreeNode = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let myTree = new TreeNode(1);
myTree.left = new TreeNode(2);
myTree.right = new TreeNode(3);
myTree.left.left = new TreeNode(4);
myTree.right.left = new TreeNode(5);

let actual = levelOrder(myTree); // expected [[3], [9, 20], [15, 7]];

console.log(actual);
console.log(actual[1]);
