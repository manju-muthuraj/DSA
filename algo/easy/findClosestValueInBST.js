/*
  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.

          10
      5         15
   2     5   13     22
1                14

target - 12
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findClosetValueInBstHelper(tree, target, closest){
    let currentNode = tree;
    while (currentNode != null) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }
        // If the target is less than the current value then we're going to skip the right
        // side of tree and just travers the left half of tree and vice-versa
        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break;
        }
    }
    return closest;
}

function findClosestValueInBst(tree, target){
    return findClosetValueInBstHelper(tree, target, tree.value)
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


console.log('findClosestValueInBst ', findClosestValueInBst(root, 12));
