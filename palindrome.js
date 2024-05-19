const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(s) {
    // Normalize the string by converting it to lowercase and removing non-alphanumeric characters
    const normalizedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the normalized string is equal to its reverse
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// Taking user input
rl.question("Enter a string to check if it's a palindrome: ", function(userInput) {
    // Checking if the input string is a palindrome
    if (isPalindrome(userInput)) {
        console.log("The string is a palindrome.");
    } else {
        console.log("The string is not a palindrome.");
    }
    rl.close();
});
