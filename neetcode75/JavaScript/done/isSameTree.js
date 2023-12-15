// Given two root nodes return true if the trees are the same and false if not

const isSameTree = (root1, root2) => {
  // consider the base case where one of the nodes is not defined;
  const isBaseCase = !(root1 || root2);
  if (isBaseCase) return true;

  const isBalanced =  (root1 && root2);
  if (!isBalanced) return false;

  const areSame = root1.val === root2.val;
  if (!areSame) return false;

  let [left, right] = [isSameTree(root1.left, root2.left), isSameTree(root1.right, root2.right)];
  return (left && right);
};