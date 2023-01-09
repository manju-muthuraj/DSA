/*
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Example 1:
Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

Example 2:
Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
*/

/*
Solution#
Algorithm:
From the beginning and end of the array, find the first elements that are out of the sorting order. The two elements will be our candidate subarray.
Find the maximum and minimum of this subarray.
Extend the subarray from beginning to include any number which is bigger than the minimum of the subarray.
Similarly, extend the subarray from the end to include any number which is smaller than the maximum of the subarray.
*/

function shortest_window_sort(arr) {
    let low = 0,
        high = arr.length - 1;
    // find the first number out of sorting order from the beginning
    while ((low < high && arr[low] <= arr[low + 1])) {
        low += 1;
    }

    if (low === high) { // if the array is sorted
        return 0;
    }

    // find the first number out of sorting order from the end
    while (high > 0 && arr[high] >= arr[high - 1]) {
        high -= 1;
    }

    // find the maximum and minimum of the subarray
    let subarrayMax = -Infinity,
        subarrayMin = Infinity;
    for (let k = low; k < high + 1; k++) {
        subarrayMax = Math.max(subarrayMax, arr[k]);
        subarrayMin = Math.min(subarrayMin, arr[k]);
    }

    // extend the subarray to include any number which is bigger than the minimum of the subarray
    while (low > 0 && arr[low - 1] > subarrayMin) {
        low -= 1;
    }
    // extend the subarray to include any number which is smaller than the maximum of the subarray
    while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
        high += 1;
    }

    return high - low + 1;
}

// Time - O(N)
// Space - O(1)
console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortest_window_sort([1, 2, 3]));
console.log(shortest_window_sort([3, 2, 1]));
