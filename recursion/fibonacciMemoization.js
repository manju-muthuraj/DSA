function fibonacci(n, memo) {
    memo = memo || {};
    if (memo[n]) {
        return memo[n];
    }
    if (n <= 1) {
        return 1;
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}


console.log(fibonacci(5));

function memoizer(fun) {
    let cache = {};
    return function (n) {
        if (cache[n] != undefined) {
            return cache[n];
        } else {
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}
