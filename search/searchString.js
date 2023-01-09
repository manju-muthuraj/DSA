function naiveSearch(stringValue, searchString) {
    let count = 0;
    for (let i = 0; i < stringValue.length; i++) {
        for (let j = 0; j < searchString.length; j++) {

            if (searchString[j] !== stringValue[i + j]) {
                break;
            }
            if (j === searchString.length - 1) {
                console.log('i j', i, ' ', j);
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));
