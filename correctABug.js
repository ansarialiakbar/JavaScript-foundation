const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function doubleQuantities(cart) {
    return cart.map(quantity => quantity * 2); // Double each quantity in the array
}

// Asking for input using readline
rl.question("Enter the quantities of items in your cart (comma separated): ", function(input) {
    // Split the input string into an array, parse to numbers, and trim whitespace
    const cart = input.split(',').map(item => parseInt(item.trim()));

    const correctedCart = doubleQuantities(cart);
    console.log(`Corrected quantities: ${correctedCart.join(', ')}`);

    rl.close();
});
