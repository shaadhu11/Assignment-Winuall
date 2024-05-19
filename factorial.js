const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    else {
        return n * factorial(n - 1);
    }
}

// Taking user input
rl.question("Enter a number to calculate its factorial: ", function(userInput) {
    const num = parseInt(userInput);

    // Checking if the input is a non-negative integer
    if (isNaN(num) || num < 0) {
        console.log("Factorial is not defined for negative numbers.");
    } else {
        const result = factorial(num);
        console.log(`The factorial of ${num} is ${result}.`);
    }

    rl.close();
});
