// If any two numbers in the array matches the target sum, return matching number
function twoNumberSum(array, targetSum) {
    // store the current number in loop to hashtable
    if(array.length === 0) {
        return [];
    }
    const nums = {};
    for(const num of array){
        const potentialMatch = targetSum - num;
        // if the match exists in the hashtable/object then we found the numbers in the array which matches the target sum
        // i.e., potentialMatch and current number in the loop
        if(potentialMatch in nums){
            return [potentialMatch, num];
        } else {
            // if the match doesn't exists in the hashtable/object, then add the current number in the loop to it.
            nums[num] = true;
        }
    }
}

// O(n) time | O(n) space
console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));
