// check whether the characters in the first string form a subsequence in the second string with the same order

// iterative
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) {
        return true;
    }
    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            i++;
        }
        if (i === str1.length) {
            return true;
        }
        j++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));

// Recursive but not O(1) Space
function isSubsequence(str1, str2) {
    if(str1.length === 0) {
        return true
    }
    if(str2.length === 0) {
        return false
    }
    if(str2[0] === str1[0]) {
        return isSubsequence(str1.slice(1), str2.slice(1));
    }
    return isSubsequence(str1, str2.slice(1));
}

// BIG O - O(N+M)
// Space - O(1)
console.log(isSubsequence('sing', 'sting'));
