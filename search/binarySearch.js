// Divide and Conquer Algorithm
// Binary search only works on sorted array
function binarySearch(inputArray, searchElement) {
    let startIdx = 0;
    let endIdx = inputArray.length - 1;
    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    while (inputArray[middleIdx] !== searchElement && startIdx <= endIdx) {
        if (searchElement < inputArray[middleIdx]) {
            endIdx = middleIdx - 1;
        } else {
            startIdx = middleIdx + 1;
        }
        middleIdx = Math.floor((startIdx + endIdx) / 2);
    }
    return inputArray[middleIdx] === searchElement ? middleIdx : -1;
}

// BIG O - Worst/ Average case - O(log n)
//         Best case - O(1)
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 6));
