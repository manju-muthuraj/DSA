/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space;
after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
*/

function remove_duplicates(arr) {
    // index of the next non-duplicate element
    let nextNonDuplicate = 1;

    let i = 1;
    while (i < arr.length) {
        let x = arr[nextNonDuplicate - 1];
        let y = arr[i];
        if (x !== y) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate += 1;
        }
        i += 1;
    }
    return nextNonDuplicate;
}

// Time - O(N)
// Space - O(1)
console.log(remove_duplicates([2, 3, 3, 3, 6, 9,1, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

/*

Problem 1:
Given an unsorted array of numbers and a target ‘key’,
remove all instances of ‘key’ in-place and return the new length of the array.

*/
// Time - O(N)
// Space - O(1)
function remove_element(arr, key) {
  //  let nextElement = 0; // index of the next element which is not 'key'
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== key) {
            // arr[nextElement] = arr[i];
            // nextElement += 1;
            newarr.push(arr[i]);
        }
    }
    console.log('A', newarr);
    return newarr.length;
}


console.log(`Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
