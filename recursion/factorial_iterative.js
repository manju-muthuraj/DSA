// A factorial is a function that multiplies a number by every number below it.
// For example 5!= 5*4*3*2*1=120
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

console.log(factorial(10));
