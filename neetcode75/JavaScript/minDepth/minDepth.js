  var minDepth = function(root) {
    if (!root) return 0;
    let min = traverse(root);

    return min;
  };

  var traverse = function(root) {
    if (!root) return Infinity;

    let hasNoChildren = !root.left && !root.right;
    if (hasNoChildren) return 1;

    let left = traverse(root.left);
    let right = traverse(root.right);

    if (left < right) {
      return 1 + left;
    } else {
      return 1 + right;
    }
  }

module.exports = minDepth;
