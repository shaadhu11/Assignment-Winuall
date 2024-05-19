const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function uniqueValues(arr) {
    // Use a Set to store unique values
    const uniqueSet = new Set();
    const uniqueArray = [];

    for (const num of arr) {
        if (!uniqueSet.has(num)) {
            uniqueSet.add(num);
            uniqueArray.push(num);
        }
    }

    return uniqueArray;
}

// Taking user input
rl.question("Enter a list of integers separated by spaces: ", function(userInput) {
    const inputArray = userInput.split(' ').map(Number);

    // Getting the unique values
    const result = uniqueValues(inputArray);
    console.log(`Unique values: ${result}`);

    rl.close();
});
