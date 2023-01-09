/*
Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Example 1:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

Example 2:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false

Solution #

As we know, a palindrome LinkedList will have nodes values that read the same backward or forward.
This means that if we divide the LinkedList into two halves, the node values of the first half in the forward direction
should be similar to the node values of the second half in the backward direction. As we have been given a Singly LinkedList,
we can’t move in the backward direction.

To handle this, we will perform the following steps:

    We can use the Fast & Slow pointers method similar to Middle of the LinkedList to find the middle node of the LinkedList.
    Once we have the middle of the LinkedList, we will reverse the second half.
    Then, we will compare the first half with the reversed second half to see if the LinkedList represents a palindrome.
    Finally, we will reverse the second half of the LinkedList again to revert and bring the LinkedList back to its original form.

*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


function is_palindromic_linked_list(head) {
    if (head === null || head.next === null) {
        return true;
    }

    // find middle of the LinkedList
    let slow = head,
        fast = head;
    while ((fast !== null && fast.next !== null)) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let headSecondHalf = reverse(slow); // reverse the second half
    // store the head of reversed part to revert back later
    let copyHeadSecondHalf = headSecondHalf;

    // compare the first and the second half
    while ((head !== null && headSecondHalf !== null)) {
        if (head.value !== headSecondHalf.value) {
            break; // not a palindrome
        }

        head = head.next;
        headSecondHalf = headSecondHalf.next;
    }
    reverse(copyHeadSecondHalf); // revert the reverse of the second half

    if (head === null || headSecondHalf === null) { // if both halves match
        return true;
    }

    return false;
}

function reverse(head) {
    let prev = null;
    let next;
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);


// Solution using Stack

function isPalindrome(head) {

    let slow = head;
    let isPalindrome = true;
    let stack = [];

    while (slow != null) {
        stack.push(slow.value);
        slow = slow.next;
    }

    while (head != null) {

        // pop - Removes the last element from an array and returns it.
        let i = stack.pop();
        if (head.value == i) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
            break;
        }
        head = head.next;
    }
    return isPalindrome;
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(3);
const six = new Node(2);
const seven = new Node(1);
one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
const condition = isPalindrome(one);

console.log(`Is palindrome using stack : ${condition}`);
