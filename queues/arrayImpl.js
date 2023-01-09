// Queue is a FIFO
let q = [];

q.push('1');
q.push('2');
q.push('3');

console.log(q);
// shift will remove the first one but it has to reindex the whole array.
console.log(q.shift());
console.log(q);


// Other way & better one is unshift combined with pop
// Unshift will add values to the beginning
// pop will remove from the end
q = [];
q.unshift('1');
q.unshift('2');
q.unshift('3');
console.log(q);
console.log(q.pop());
console.log(q);
