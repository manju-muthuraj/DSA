// UNOPTIMIZED VERSION OF BUBBLE SORT
// A sorting algorithm where the largest values bubble up to the top!
// O(n2)
/*
    Start looping from with a variable called i the end of the array towards the beginning
    Start an inner loop with a variable called j from the beginning until i - 1
    If arr[j] is greater than arr[j+1], swap those two values!
    Return the sorted array
*/


function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// ES2015 Version
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

//bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);


// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps){
            break;
        }
    }
    return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
