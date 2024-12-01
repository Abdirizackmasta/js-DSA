function powerOfTwo(n) {
    if (n < 1) return false;

    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n= n/2
    }
    return true;
}

// big O = O(log(n))
// console.log(powerOfTwo(1))
// console.log(powerOfTwo(2))
// console.log(powerOfTwo(3))
// console.log(powerOfTwo(4))

function bitwisePowerOfTwo(n){
    if (n < 1) return false;

    return (n & (n - 1)) === 0;
}
console.log(bitwisePowerOfTwo(1));
console.log(bitwisePowerOfTwo(2));
console.log(bitwisePowerOfTwo(3));
console.log(bitwisePowerOfTwo(4));