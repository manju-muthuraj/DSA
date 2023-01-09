function findThreeLargestNumbers(array) {
    let threeLargest = [null,null,null];
    for (const num of array) {
        threeLargest = updateLargest(threeLargest, num);
    }
    return threeLargest;
}

function updateLargest(threeLargest, num) {
        if (threeLargest[2] === null || num > threeLargest[2]) {
            threeLargest = shiftAndUpdate(threeLargest, num, 2);
        } else if (threeLargest[1] === null || num > threeLargest[1]) {
            threeLargest = shiftAndUpdate(threeLargest, num, 1);
        } else if (threeLargest[0] === null || num > threeLargest[0]) {
            threeLargest = shiftAndUpdate(threeLargest, num, 0);
        }
        return threeLargest;
}

function shiftAndUpdate(array, num, index) {
    for (let i = 0; i <= index.length; i++) {
        if (i === index) {
            array[i] = num;
        } else {
            console.log('array[i] ', array[i])
            array[i] = array[i+1];
            console.log('array[i] ', array[i])
        }
    }
    return array;
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));
