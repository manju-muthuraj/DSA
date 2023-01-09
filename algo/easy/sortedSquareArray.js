/*
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  Sample Input = [1, 2, 3, 5, 6, 8, 9]
  Sample Output = [1, 4, 9, 25, 36, 64, 81]
*/

// my solution
function sortedSquaredArray(array) {
    const sortedArray = [];
    if(array.length === 0){
        return [];
    }
    for(let arr of array) {
        let square = arr * arr;
        sortedArray.push(square);
    }
    sortedArray.sort((a,b) => a - b);
    return sortedArray;
}

console.log(sortedSquaredArray([1,2,3,4,5,6]));
