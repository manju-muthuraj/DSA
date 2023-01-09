/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// leet code solution
function addTwoNumbers(l1, l2) {
    let list = new ListNode(0);
    let currentNode = list;

    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        currentNode.next = new ListNode(sum);
        currentNode = currentNode.next;

        sum = carry;
        carry = 0;
    }

    return list.next;
}

// my solution
const addTwoNumbers = function(l1, l2) {
    let arr1 = [];
    let arr2 = [];
    let sum;

    let list = new ListNode(0);
    let currentNode = list;

    while(l1 != null || l2 != null) {
        if (l1 !== null) {
            arr1.push(l1.val);
            l1 = l1.next;
        }

        if (l2 !== null) {
            arr2.push(l2.val);
            l2 = l2.next;
        }
    }
    console.log('arr1', arr1);
    console.log('arr2', arr2);
    const s1 = arr1.join('');
    const s2 = arr2.join('');
    sum =  parseInt(s1) + parseInt(s2);
    console.log('s1', s1);
    console.log('s2', s2);
    console.log('sum', sum);
    for(let i = sum.toString().length - 1; i >= 0; i--) {
        currentNode.next = new ListNode(sum.toString()[i]);
        currentNode = currentNode.next;
    }

    return list.next;
};


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

// const l1 = {
//     head: {
//         val: 9,
//         next: {
//             val: 9,
//             next: {
//                 val: 9,
//                 next: {
//                     val: 9,
//                     next: {
//                         val: 9,
//                         next: {
//                             val: 9,
//                             next: {
//                                 val: 9,
//                                 next: null
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };

const l1 = {
    head: {
        val: 2,
        next: {
            val: 4,
            next: {
                val: 9,
                next: null
                }
        }
    }
};

const l2 = {
    head: {
        val: 5,
        next: {
            val: 6,
            next: {
                val: 4,
                next: {
                    val: 9,
                    next: null
                }
            }
        }
    }
};

// [9,9,9,9,9,9,9]
// [9,9,9,9]

console.log(addTwoNumbers(l1.head,l2.head));
