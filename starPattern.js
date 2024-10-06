const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printInvertedTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '* '; // Append an asterisk followed by a space
        }
        console.log(stars.trim()); // Print the row of asterisks
    }
}

// Asking for input using readline
rl.question("Enter the number of rows for the inverted triangle: ", function(input) {
    const rows = parseInt(input); // Convert input to an integer
    if (isNaN(rows) || rows <= 0) {
        console.log("Please enter a valid positive integer.");
    } else {
        printInvertedTriangle(rows);
    }
    rl.close();
});
