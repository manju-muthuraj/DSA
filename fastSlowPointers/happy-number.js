/*
Any number will be called a happy number if,
after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Example 1:

Input: 23
Output: true (23 is a happy number)
Explanations: Here are the steps to find out that 23 is a happy number:

  2 square + 3 square = 4 + 9 = 13

Example 2:

Input: 12
Output: false (12 is not a happy number)
Explanations: Here are the steps to find out that 12 is not a happy number:

           1​ square ​+ 2​ square​​ = 1 + 4 = 5
           5 square = 25
           2 square + 5 square = 4 + 25 = 29
           ..
           2​ square + 9​ square ​​ = 4 + 81 = 85
 Step 5.   8 square + 5​ square ​​ = 64 + 25 = 89
           ..
           ..
           3​ square ​​+ 7 square ​​ = 9 + 49 = 58
 Step 13.  5 square + 8 square ​ = 25 + 64 = 89

Step ‘13’ leads us back to step ‘5’ as the number becomes equal to ‘89’, this means that we can never reach ‘1’, therefore, ‘12’ is not a happy number.
*/
/*

Solution #

The process, defined above, to find out if a number is a happy number or not, always ends in a cycle.
If the number is a happy number, the process will be stuck in a cycle on number ‘1,’ and if the number
is not a happy number then the process will be stuck in a cycle with a set of numbers.
As we saw in Example-2 while determining if ‘12’ is a happy number or not, our process will get stuck in a
cycle with the following numbers: 89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37 -> 58 -> 89

We saw in the LinkedList Cycle problem that we can use the Fast & Slow pointers method to find a cycle among a set of elements.
As we have described above, each number will definitely have a cycle.
Therefore, we will use the same fast & slow pointer strategy to find the cycle and once the cycle is found,
we will see if the cycle is stuck on number ‘1’ to find out if the number is happy or not.

*/

function find_happy_number(num) {
    let slow = num,
        fast = num;
    while (true) {
        slow = find_square_sum(slow); // move one step
        fast = find_square_sum(find_square_sum(fast)); // move two steps
        if (slow === fast) { // found the cycle
            break;
        }
    }
    return slow === 1; // see if the cycle is stuck on the number '1'
}

function find_square_sum(num) {
    let sum = 0;
    while ((num > 0)) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}


console.log(find_happy_number(23));
console.log(find_happy_number(12));
