/*
Given an array arr of unsorted numbers and a target sum, count all triplets in
it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
Write a function to return the count of such triplets.

Example 1:
Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

Example 2:
Input: [-1, 4, 2, 1, 3], target=5
Output: 4
Explanation: There are four triplets whose sum is less than the target:
             [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
*/

/*

Following a similar approach, first, we can sort the array and then iterate through it, taking one number at a time.
Let’s say during our iteration we are at number ‘X’,
so we need to find ‘Y’ and ‘Z’ such that X+Y+Z < target.
At this stage, our problem translates into finding a pair whose sum is less than “target−X”
(as from the above equation Y + Z == target − X )
*/

function triplet_with_smaller_sum(arr, target) {
    arr.sort((a, b) => a - b);
    let count = 0;
    // arr.length - 2 because we're finding triplets
    for (let i = 0; i < arr.length - 2; i++) {
        // y + z = target - arr[i]
        count += search_pair(arr, target - arr[i], i);
    }
    return count;
}


function search_pair(arr, target_sum, first) {
    let count = 0;
    let left = first + 1,
        right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] < target_sum) { // found the triplet
            // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
            // left and right to get a sum less than the target sum
            count += right - left;
            left += 1;
        } else {
            right -= 1; // we need a pair with a smaller sum
        }
    }
    return count;
}

// Time - O(N2)
// Space - O(N)
console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
