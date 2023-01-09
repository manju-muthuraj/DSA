/*const linkedList = {
    head: {
        val: 1,
        next: {
        val: 2,
        next: {
            val: 4,
            next: {
                val: 9,
                next: null
            }
        }
    }
    }
}
};*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    addMultipleNodes(values) {
    let current = this;
    while (current.next !== null) {
        current = current.next;
    }
    for (const value of values) {
        current.next = new LinkedList(value);
        current = current.next;
    }
    return this;
}

    getNodesInArray() {
        const nodes = [];
        let current = this;
        while (current !== null) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }

    removeDuplicatesFromLinkedList(linkedList){
        let currentNode = linkedList;
        while (currentNode != null) {
            let nextDistinctNode = currentNode.next;
            while (nextDistinctNode != null && nextDistinctNode.value === currentNode.value) {
                nextDistinctNode = nextDistinctNode.next;
            }
            currentNode.next = nextDistinctNode;
            currentNode =  nextDistinctNode;
        }
        return linkedList;
    }
}

const input = new LinkedList(1).addMultipleNodes([1, 3, 4, 4, 4, 5, 6, 6]);
console.log(input);
//console.log(input.getNodesInArray());
console.log(input.removeDuplicatesFromLinkedList(input));
