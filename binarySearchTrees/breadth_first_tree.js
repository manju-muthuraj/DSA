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
            // don't insert value If it already exists in tree
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

    BFS() {
        let tree = this.root,
            finalData = [],
            queue = [];
        queue.push(tree);

        while (queue.length) {
            // shift() method removes the first element from an array and returns that removed element
            tree = queue.shift();
            finalData.push(tree.value);
            if (tree.left) {
                queue.push(tree.left);
            }
            if (tree.right) {
                queue.push(tree.right);
            }
        }
        return finalData;
    }
}


//      10
//   6     15
// 3  8       20

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());


