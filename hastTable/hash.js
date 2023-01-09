
// String has functions
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        // total mod arrayLen gives valid index
        total = (total + value) % arrayLen;
    }
    return total;
}

// console.log(hash('pink','10'));
// console.log(hash('orangered','10'));
// console.log(hash('cyan','10'));

// Improved version
// we expect arrayLen to be prime to avoid collisions
// we do min of key length to 100 to maintain constant time if the key length is large one
function hash_1(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        // Returns the Unicode value of the character at the specified location
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(hash_1('pink','11'));
console.log(hash_1('orangered','11'));
console.log(hash_1('cyan','11'));
