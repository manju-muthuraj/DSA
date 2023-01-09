/*
    Define a function that accepts list of numbers
    Figure out how many digits the largest number has
    Loop from k = 0 up to this largest number of digits
    For each iteration of the loop:
        - Create buckets for each digit (0 to 9)
        - place each number in the corresponding bucket based on its kth digit
    Replace our existing array with values in our buckets, starting with 0 and going up to 9
    return list at the end!
*/

// returns a digit in a number at index. starts from end for index 0
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// return number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// returns max digits number in an array
function maxDigitsNumberInArray(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(inputArray) {
    let maxDigitCount = maxDigitsNumberInArray(inputArray);
    for (let k = 0; k < maxDigitCount; k++) {
        // creates 10 empty arrays to group based on the numbers
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < inputArray.length; i++) {
            let digit = getDigit(inputArray[i], k);
            digitBuckets[digit].push(inputArray[i]);
        }
        console.log('digitBuckets ', digitBuckets);
        inputArray = [].concat(...digitBuckets);
    }
    return inputArray;
}

console.log('getDigit : ', getDigit(231, 1));

console.log('digitCount : ', digitCount(231333));

console.log('maxDigitsNumberInArray : ', maxDigitsNumberInArray([23, 345, 5467, 12, 2345, 9852]));

// BIG O - O(nk)
//           n - length of array
//           k - number of digits(average)
// Space   O(n + k)
radixSort([23, 345, 5467, 12, 2345, 9852]);








