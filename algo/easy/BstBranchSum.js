/*
 Write a function that takes in a Binary Tree and returns a list of its branch
 sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
branch is a path of nodes in a tree that starts at the root node and ends at
any leaf node.
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    const sums = [];
    const finalSum = calculateBranchSums(root, 0, sums);
    return finalSum;
}

function calculateBranchSums(node, runningSum, sums) {
    if(!node) return;
    //console.log('node ',node);
    const newRunningSum = runningSum + node.value;
    // If the leaf nodes are not present
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return sums;
    }

    calculateBranchSums(node.left,newRunningSum, sums);
    calculateBranchSums(node.right,newRunningSum, sums);
    return sums;
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

console.log('branchSums ', branchSums(root));
