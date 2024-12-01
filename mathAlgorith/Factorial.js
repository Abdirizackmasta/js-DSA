function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative integers";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
// recursive  
function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))
// Example usage:
const number1 = 5;
const number2 = 10;
const fact1 = factorial(number1);
const fact2 = factorial(number2);
console.log(`Factorial of ${number1} is ${fact1}`);
console.log(`Factorial of ${number2} is ${fact2}`);


// BIG - O IS LINEAR COMPLEXITY O(n)
