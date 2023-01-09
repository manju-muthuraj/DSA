// In mathematics, the Fibonacci numbers, commonly denoted Fn,
// form a sequence, called the Fibonacci sequence, such that each number is the sum of the two
// preceding ones, starting from 0 and 1. That is, and for n > 1
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
