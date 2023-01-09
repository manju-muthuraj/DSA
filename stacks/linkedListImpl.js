// implement stack(LIFO) using linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.head) return null;
        const temp = this.head;
        if (this.head === this.tail) {
            this.tail = null;
        }
        this.head = this.head.next;
        this.size--;
        return temp.value;
    }

    display() {
        let currNode = this.head;
        while (currNode != null) {
            console.log(currNode.value + " <-> ");
            currNode = currNode.next;
        }
        console.log('----------------------------');
    }
}

/* To implement stack, we're adding and removing from the beginning and call it a stack
*  BIG 0 - Insertion O(1) & Removal O(1)
*
* */
const stack = new Stack();
// 1 will become head
stack.push(1);
//2 will become head
stack.push(2);
// 3 will become head
stack.push(3);
stack.push(4);

stack.display();

// head will be removed
stack.pop();

stack.display();

