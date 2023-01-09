// In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.

// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is at 2n + 2


// For any child node at index  n...
// Its parent is at index (n-1)/2

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUpMaxHeap();
    }

    // For any child node at index n...
    // Its parent is at index (n-1)/2 floored
    bubbleUpMaxHeap() {
        let childNodeIndex = this.values.length - 1;
        const childNodeElement = this.values[childNodeIndex];
        while (childNodeIndex > 0) {
            // For any child node at index  n...
            // Its parent is at index (n-1)/2
            let parentNodeIndex = Math.floor((childNodeIndex - 1) / 2);
            let parentNodeElement = this.values[parentNodeIndex];
            if (childNodeElement <= parentNodeElement) break;
            // If the child node is greater than the parent node, swap it
            this.values[parentNodeIndex] = childNodeElement;
            this.values[childNodeIndex] = parentNodeElement;
            childNodeIndex = parentNodeIndex;
        }
    }

    // [55, 39, 41, 18,27, 12, 33]
    removeMaxElementFromMaxHeap() {
        const maxElement = this.values[0];
        // [55, 39, 41, 18,27, 12]
        const lastElement = this.values.pop();
        //swap the first element with the last element
        // [33, 39, 41, 18,27, 12]
        if (this.values.length > 0) {
            this.values[0] = lastElement;
            this.sinkDown();
        }
        return maxElement;
    }

    // [33, 39, 41, 18,27, 12]
    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[index];

        while (true) {
            // For any index of an array n...
            // The left child is stored at 2n + 1
            let leftChildIndex = 2 * index + 1;

            // The right child is at 2n + 2
            let rightChildIndex = 2 * index + 2;

            let leftChildElement, rightChildElement;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChildElement = this.values[leftChildIndex];
                if (leftChildElement > element) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChildElement = this.values[rightChildIndex];
                if ((swapIndex === null && rightChildElement > element) ||
                    (swapIndex !== null && rightChildElement > leftChildElement)) {
                    swapIndex = rightChildIndex;
                }
            }
            if (swapIndex === null) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;
            index = swapIndex;
        }
    }
}

// Input:
//         41
//    39        33
// 18   27   12     55

// Output:
//         55
//    39        41
// 18   27   12     33

/// BIG 0 - Insertion O(log n)
//          Removal O(log n)
//          Search O(n)

// create a max binary heap
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log('heap.values ', heap.values);
heap.removeMaxElementFromMaxHeap();

console.log('heap.values ', heap.values);




