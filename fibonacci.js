function fibonacciWithMemorization(number, memo) {
    if (number === 0 || number === 1)
        return number;
    if (memo[number] === undefined)
        memo[number] = fibonacciWithMemorization(number - 1, memo) + fibonacciWithMemorization(number - 2, memo);
    return memo[number];
}
var fibonacci = function (number) { return fibonacciWithMemorization(number, new Array(number + 1)); };
console.log(fibonacci(10));
