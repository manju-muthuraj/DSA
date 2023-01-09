/*
The distance between a node in a Binary Tree and the tree's root is called the
node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes'
depths.
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// O(n) time | O(h) space where h is the height of the BST
function nodeDepthRecursive(root, depth) {
    if (root === null) return 0;
    return depth + nodeDepthRecursive(root.left, depth + 1) + nodeDepthRecursive(root.right, depth + 1);
}

function nodeDepthIterative(root, depth) {
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}];
    while (stack.length > 0) {
        const {node, depth } = stack.pop();
        if (node === null) continue;
        sumOfDepths += depth;
        stack.push({node: node.left, depth: depth + 1});
        stack.push({node: node.right, depth: depth + 1});
    }
    return sumOfDepths;

}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(nodeDepthRecursive(root, 0));
console.log(nodeDepthIterative(root, 0));
