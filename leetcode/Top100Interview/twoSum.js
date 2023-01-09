/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
const twoSum = function(nums, target) {
    let indexes = [];
    for (let i = 0; i < nums.length; i += 1) {
        let currentDifference = target - nums[i];
        let index = indexes[currentDifference];
        if (index !== undefined && index !== i) {
            return [i, index];
        } else {
            indexes[nums[i]] = i;
        }
    }
};

console.log(twoSum([9,9,1,2,8], 10));
