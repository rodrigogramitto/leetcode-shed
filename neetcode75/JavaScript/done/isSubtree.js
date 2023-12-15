// Given the roots of two binary trees root and subRoot,
// return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
// The tree tree could also be considered as a subtree of itself.

// Example 1:

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:


// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// I: root of main tree, root of subTree
// O: bool -> true if subTree is present in main tree
// C:
 // My naive solution

//  var isSubtree = function(root, subRoot) {
//   let rootValues = [];
//   let subRootValues = [];

//   const traverseMain = (node) => {
//     if (!node) return;
//     rootValues.push(node.val);
//     traverseMain(node.left);
//     traverseMain(node.right)
//   };
//   const traverseSub = (node) => {
//     if (!node) return;
//     subRootValues.push(node.val);
//     traverseSub(node.left);
//     traverseSub(node.right);
//   };
//   traverseMain(root);
//   traverseSub(subRoot);

//   const rootString = rootValues.join(',');
//   const subRootString = subRootValues.join(',');

//   return rootString.includes(subRootString);
// };

// The idea behind the optimized solution is to check if the roots are the same tree,
// and subsequently check if the other nodes of the main tree and the subtree are the same

var isSubtree = (root, subRoot) => {
  if (!root) return false;

  if (isSame(root, subRoot)) return true;

  let left = isSubtree(root.left, subRoot);
  let right = isSubtree(root.right, subRoot);

  return left || right;
}

const isSame = (root1, root2) => {
  const isEnd = !(root1 && root2);
    if (isEnd) return root1 === root2;

  const areSame = root1.val === root2.val;
    if (!areSame) return false;

  let left = isSame(root1.left, root2.left);
  let right = isSame(root1.right, root2.right);

  return left && right;
}