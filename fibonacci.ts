function fibonacciWithMemorization(number: number, memo: number[]): number{
    if(number === 0 || number === 1)
        return number;
    
    if(memo[number] === undefined)
        memo[number] = fibonacciWithMemorization(number - 1, memo) + fibonacciWithMemorization(number - 2, memo);

    return memo[number];
}

const fibonacci = (number: number): number => fibonacciWithMemorization(number, new Array(number + 1));

console.log(fibonacci(10));