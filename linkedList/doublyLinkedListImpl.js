class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push_addLinkedNode(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop_removeNodeAtTail() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift_RemoveHead() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift_addNodeAtStart(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getNodeAtIndex(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set_updateValueOfNodeAtIndex(index, val) {
        let foundNode = this.getNodeAtIndex(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert_addNewNodeAtIndex(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift_addNodeAtStart(val);
        }
        if (index === this.length) {
            return !!this.push_addLinkedNode(val);
        }

        let newNode = new Node(val);
        let beforeNode = this.getNodeAtIndex(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    display() {
        let currNode = this.head;
        while (currNode != null) {
            console.log(currNode.val + " <-> ");
            currNode = currNode.next;
        }
        console.log('----------------------------');
    }
}

const list = new DoublyLinkedList();
list.push_addLinkedNode("Harry");
list.push_addLinkedNode("Ron");
list.push_addLinkedNode("Hermione");

// update the value of node at index
list.set_updateValueOfNodeAtIndex(2, 'Update_Hermione');

list.display();

// insert node at the specified index
list.insert_addNewNodeAtIndex(2, 'Dumbledore');

// get the node at index
console.log(list.getNodeAtIndex(1));

// remove the node at tail
list.pop_removeNodeAtTail();

// remove the head
list.shift_RemoveHead();

// add node at the start
list.unshift_addNodeAtStart('test');


list.display();


