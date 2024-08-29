function fibonacciSequence(n) {
    if (n <= 0) {
        return "Input should be a positive integer.";
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
}

const fibSequenceOf7 = fibonacciSequence(9);
console.log(fibSequenceOf7);
