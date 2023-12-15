const minDepth = require('./minDepth.js');
console.log(minDepth);
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
};

describe('should find the minimum depth in a binary tree from root to a branch with no leaves', () => {
  test('Should return a positive integer for trees with branches', () => {
    let root = new TreeNode(2)
      root.right = new TreeNode(3);
      root.right.right = new TreeNode(4);
      root.right.right.right = new TreeNode(5);
      root.right.right.right.right = new TreeNode(6);
    expect(minDepth(root)).toBe(5);
  })
  test('Shoulr return 0 for null or empty trees', () => {
    expect(minDepth(null)).toBe(0);
  })
})