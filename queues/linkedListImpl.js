// FIFO Queue
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.head) return null;

        const temp = this.head;
        if(this.head === this.tail) {
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


const queue = new Queue();
// enqueue will add to the tail
// BIG 0 - Insertion O(1) & Removal O(1)
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.display();

// dequeue will remove from the beginning
queue.dequeue();
queue.display();
