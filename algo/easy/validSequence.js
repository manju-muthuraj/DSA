// Given two non-empty arrays of integers, write a function that determines whether the second array is subsequence of the
// first one

//solution1
function validSequence(array, sequence) {

    let seqIndex = 0;

    for (const arr of array) {
        if (seqIndex === sequence.length) break;
        if (sequence[seqIndex] === arr) {
            seqIndex++;
        }
    }

    return seqIndex === sequence.length;
}

// solution 2
function validSequence2(array, sequence) {
    let seqIndex = 0;
    let arrIndex = 0;

    while (arrIndex < array.length && seqIndex < sequence.length) {
        if(array[arrIndex] == sequence[seqIndex]) {
            seqIndex++;
        }
        arrIndex++;

    }
    return seqIndex === sequence.length;
}

// O(n) time | O(1) space
//console.log(validSequence([1, -5, 6, 10, 14], [-5, 14]));

console.log(validSequence2([1, -5, 6, 10, 14], [-5, 14]));
