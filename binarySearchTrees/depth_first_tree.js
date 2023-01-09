class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    //      10
    //   6     15
    // 3  8       20

    // Output: [ 10, 6, 3, 8, 15, 20 ]
    // root to bottom left & bottom right
    DFSPreOrder() {
        const data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);
        return data;
    }

    //      10
    //   6     15
    // 3  8       20

    // Output: [ 3, 8, 6, 20, 15, 10 ]
    DFSPostOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    //      10
    //   6     15
    // 3  8       20

    // Output: [ 3, 6, 8, 10, 15, 20 ]
    DFSInOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);
        return data;
    }
}

//      10
//   6     15
// 3  8       20

// Time complexity of DFS and BFS are same
// If the tree is lot bigger, the BFS could take more space and same is the case for DFS if the depth of tree is too big
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();

console.log('tree.DFSPreOrder() ', tree.DFSPreOrder());
console.log('tree.DFSPostOrder() ', tree.DFSPostOrder());
console.log('tree.DFSInOrder(); ', tree.DFSInOrder());



