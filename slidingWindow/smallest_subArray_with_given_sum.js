function smallest_subarray_with_given_sum(s, arr) {
    let minLength = Infinity, windowSum = 0, windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum  += arr[windowEnd];  // add the next element

        // shrink the window as small as possible until the 'window_sum' is smaller than 's'
        while (windowSum >= s) {
            //minLength = Math.min(minLength, windowEnd - windowStart +1);
            //              OR
            if (windowEnd - windowStart +1 < minLength ) {
                minLength = windowEnd - windowStart + 1;
            }
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

       return minLength;
}


console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);

/*
* Time Complexity #

The time complexity of the above algorithm will be O(N)O(N)O(N). The outer for loop runs for all elements,
* and the inner while loop processes each element only once;
* therefore, the time complexity of the algorithm will be O(N+N)O(N+N)O(N+N), which is asymptotically equivalent to O(N)O(N)O(N).

* Space Complexity #

The algorithm runs in constant space O(1)O(1)O(1).

* */

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if(total < sum && end < nums.length){
            total += nums[end];
            end++;
        }
            // if current window adds up to at least the sum given then
        // we can shrink the window
        else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
