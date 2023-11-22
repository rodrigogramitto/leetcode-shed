function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
};

  var minDepth = function(root) {
    if (!root) return;

    let hasNoChildren = !root.left && !root.right;
    if (hasNoChildren) return 1;

    let left = minDepth(root.left);
    let right = minDepth(root.right);

    if (left < right) {
      return 1 + left;
    } else {
      return 1 + right;
    }
  };

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

let root = new TreeNode(2)
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);
root.right.right.right.right = new TreeNode(6);

console.log(minDepth(root));

