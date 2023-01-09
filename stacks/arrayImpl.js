// Stack is LIFO(Last in first out) data structure

// If you just push and pop to an array, it would work like a stack
// we can also use unshift to add to an array and shift to remove

 const stack = [];

stack.push('google');
stack.push('instagram');
stack.push('twitter');

console.log(stack);

// remove the last in
console.log(stack.pop());


// The dis-advantage with the shift/unshift is we've to reindex the whole array as we're removing/adding from the beginning of an array.
// The time complexity will be high

// stack.unshift('google');
// stack.unshift('instagram');
// stack.unshift('twitter');
//
// console.log(stack);
//
// // remove the last in
// console.log(stack.shift());

