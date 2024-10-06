const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(name) {
    // Define a string of vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Iterate through each character in the name
    for (let char of name) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log(`The number of vowels in the name "${name}" is: ${count}`);
}

// Asking for input using readline
rl.question("Enter your name: ", function(name) {
    countVowels(name);
    rl.close();
});
