class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const insertedElement = this.values[index];
        while (index > 0) {
            // For any child node at index  n...
            // Its parent is at index (n-1)/2
            let parentIndex = Math.floor((index - 1) / 2);
            let parentElement = this.values[parentIndex];
            // >= is the diff b/w max heap and min heap
            if (insertedElement.priority >= parentElement.priority) break;
            this.values[parentIndex] = insertedElement;
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChildElement, rightChildElement;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChildElement = this.values[leftChildIndex];
                // < is the only diff b/w max heap and min heap
                if (leftChildElement.priority < element.priority) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChildElement = this.values[rightChildIndex];
                if (
                    // < is the diff b/w max heap and min heap
                    (swapIndex === null && rightChildElement.priority < element.priority) ||
                    (swapIndex !== null && rightChildElement.priority < leftChildElement.priority)
                ) {
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

// PriorityQueue is implemented using min binary heap
let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER.dequeue());






