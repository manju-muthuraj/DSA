/*
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.

Solution #
One brute force strategy could be to first count the number of nodes in the LinkedList and
then find the middle node in the second iteration. Can we do this in one iteration?

We can use the Fast & Slow pointers method such that the fast pointer is always twice the nodes ahead of the slow pointer.
This way, when the fast pointer reaches the end of the LinkedList, the slow pointer will be pointing at the middle node.
*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


function find_middle_of_linked_list(head) {
    let slow = head,
        fast = head;
    while ((fast !== null && fast.next !== null)) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);
