const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkDivisibility(numbers) {
    console.log("Numbers divisible by 3 but not by 2:");

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        // Check if the number is divisible by 3
        if (num % 3 !== 0) {
            continue; // Skip to the next iteration if not divisible by 3
        }

        // Check if the number is also divisible by 2
        if (num % 2 === 0) {
            continue; // Skip to the next iteration if divisible by 2
        }

        // If we reach this point, the number is divisible by 3 and not by 2
        console.log(num);
    }
}

// Asking for input using readline
rl.question("Enter an array of numbers (comma separated): ", function(input) {
    // Split the input string into an array, parse to numbers, and trim whitespace
    const numbers = input.split(',').map(item => parseInt(item.trim()));

    checkDivisibility(numbers);
    rl.close();
});
