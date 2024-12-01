function fibonacci(n) {
    // if (n <= 0) {
    //     return "the number should be positive"
    // } else if (n <= 2) return [0, 1]
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    };
    return fib;
}
function recursiveFib(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFib(n - 1) + recursiveFib(n - 2);
}
console.log(recursiveFib(5))
console.log(recursiveFib(6))
console.log(recursiveFib(7))
console.log(recursiveFib(8))