/*const linkedList = {
    head: {
        value: 6,
        next: {
            value: 10,
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null
                }
            }
        }
    }
};*/

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push_addLinkedNode(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop_removeNodeAtTail() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift_RemoveHead() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift_addNodeAtStart(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    getNodeAtIndex(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        console.log('getNodeAtIndex', current);
        return current;
    }

    set_updateValueOfNodeAtIndex(index, val) {
        const foundNode = this.getNodeAtIndex(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert_addNewNodeAtIndex(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push_addLinkedNode(val);
        }
        if (index === 0) {
            return !!this.unshift_addNodeAtStart(val);
        }

        const newNode = new Node(val);
        const prev = this.getNodeAtIndex(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    removeAtIndex(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift_RemoveHead();
        if (index === this.length - 1) return this.pop_removeNodeAtTail();
        const previousNode = this.getNodeAtIndex(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
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

const list = new SinglyLinkedList();

list.push_addLinkedNode(100);
list.push_addLinkedNode(201);
list.push_addLinkedNode(250);
list.push_addLinkedNode(350);

list.pop_removeNodeAtTail();

list.shift_RemoveHead();

list.unshift_addNodeAtStart(450);

list.getNodeAtIndex(1);

list.set_updateValueOfNodeAtIndex(1,'Hermione');

list.insert_addNewNodeAtIndex(1,'Dumble');

list.removeAtIndex(2);

list.display();

//list.getValues();


