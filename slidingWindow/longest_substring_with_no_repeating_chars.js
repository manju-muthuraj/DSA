function non_repeat_substring(str) {
    let windowStart = 0,
        maxLength = 0,
        charIndexMap = {};

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        // if the map already contains the 'rightChar', shrink the window from the beginning so that
        // we have only one occurrence of 'rightChar'
        if (rightChar in charIndexMap) {
            // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
            // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        // insert the 'rightChar' into the map
        charIndexMap[rightChar] = windowEnd;
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}


// console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);

function longestSubstrinWithNoRepeatedString(str) {

    let maxlen = 0, windowStart = 0, charIndexMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];

        if (rightChar in charIndexMap) {
            // + 1 is added as we've got the repeated character in string
            const charIndex = charIndexMap[rightChar];
            windowStart = Math.max(maxlen, charIndex + 1);
        }

        charIndexMap[rightChar] = windowEnd;

        maxlen = Math.max(maxlen, windowEnd - windowStart +1);
    }

    return maxlen;

}

console.log(`Length of the longest substring: ${longestSubstrinWithNoRepeatedString('dvdf')}`);
