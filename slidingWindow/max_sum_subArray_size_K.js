function max_sum_of_sum_array_size_K(K, arr) {
    let maxSum = 0, windowStart = 0, windowSum = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowEnd >= K - 1) {
            //maxSum = Math.max(maxSum, windowSum);
            //        OR
            if (windowSum > maxSum) {
                maxSum = windowSum
            }
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return maxSum;
}

console.log(`${max_sum_of_sum_array_size_K(3, [2, 1, 1, 1, 3, 2])}`);

// Time Complexity #
// The time complexity of the above algorithm will be O(N).

// Space Complexity #
// The algorithm runs in constant space O(1).

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}
