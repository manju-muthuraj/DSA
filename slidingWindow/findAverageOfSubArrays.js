/*
    Here, we are asked to find the average of all contiguous subarrays of size ‘5’ in the given array. Let’s solve this:

    For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6−1)/5=>2.2(1+3+2+6-1)/5 => 2.2(1+3+2+6−1)/5=>2.2
    The average of next 5 numbers (subarray from index 1-5) is: (3+2+6−1+4)/5=>2.8(3+2+6-1+4)/5 => 2.8(3+2+6−1+4)/5=>2.8
    For the next 5 numbers (subarray from index 2-6), the average is: (2+6−1+4+1)/5=>2.4(2+6-1+4+1)/5 => 2.4(2+6−1+4+1)/5=>2.4
        …

    The efficient way to solve this problem would be to visualize each contiguous subarray as a sliding window of ‘5’ elements.
    This means that we will slide the window by one element when we move on to the next subarray.
    To reuse the sum from the previous subarray, we will subtract the element going out of the window and add the element now being included in the sliding window.
    This will save us from going through the whole subarray to find the sum and, as a result, the algorithm complexity will reduce to O(N).
    Time Complexity O(N)
*/


function find_averages_of_subarrays(K, arr) {
    const result = [];
    let windowStart = 0;
    let windowSum = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowEnd >= K-1) {
            result.push(windowSum / K);

            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    return result;
}


const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
