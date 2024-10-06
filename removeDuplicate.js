const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates(cart) {
    // Use a Set to remove duplicates
    const uniqueCart = [...new Set(cart)];
    return uniqueCart;
}

// Asking for input using readline
rl.question("Enter the items in your cart (separated by commas): ", function(input) {
    // Split the input string into an array and trim whitespace
    const cart = input.split(',').map(item => item.trim());
    
    const updatedCart = removeDuplicates(cart);
    console.log(`Your cart without duplicates: ${updatedCart.join(', ')}`);
    
    rl.close();
});
