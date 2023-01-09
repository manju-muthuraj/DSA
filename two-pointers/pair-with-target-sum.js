/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:
    Input: [1, 2, 3, 4, 6], target=6
    Output: [1, 3]
    Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
*/

function pair_with_target_sum(arr, targetSum) {
    let left = 0, right = arr.length - 1;
    let currentSum;
    while (left < right) {
        currentSum = arr[left] + arr[right];

        if (currentSum === targetSum) {
            return [left, right];
        }

        // If targetSum > currentSum we need to increment the left index
        if (targetSum > currentSum) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return [-1,-1];
}

// Time  - O(n)
// Space - O(1)
console.log(pair_with_target_sum([1, 2, 3, 4, 6], 600));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// Alternate approach - hash table
/*
We can iterate through the array one number at a time.
Let’s say during our iteration we are at number ‘X’, so we need to find ‘Y’ such that “X+Y == Target".
We will do two things here:
    - Search for ‘Y’ (which is equivalent to “Target−X”) in the HashTable.If it is there, we have found the required pair.
        y = target - x;
    - Otherwise, insert “X” in the HashTable, so that we can search it for the later numbers.
*/

function pair_with_target_sum(arr, targetSum) {
    const nums = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        let y = targetSum - num;

        if (y in nums) {
            return [nums[y], i];
        }

        nums[arr[i]] = i;
    }
    return [-1, -1];
}

// Time  - O(n)
// Space - O(1)
console.log('hash table ', pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log('hash table ', pair_with_target_sum([2, 5, 9, 11], 11));
