const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizeName(name) {
    // Use ternary operator to check if the first letter is lowercase
    const capitalized = (name[0] === name[0].toLowerCase()) 
        ? name[0].toUpperCase() + name.slice(1) 
        : name;

    console.log(`The modified name is: ${capitalized}`);
}

// Asking for input using readline
rl.question("Enter your name: ", function(name) {
    capitalizeName(name);
    rl.close();
});
