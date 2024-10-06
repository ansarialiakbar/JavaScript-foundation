const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrow function to calculate total cost
const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => {
        return total + (item.unitPrice * item.quantity);
    }, 0);
};

// Function to get items in the cart
function getCartItems() {
    rl.question("Enter the items in the cart (format: unitPrice,quantity; unitPrice,quantity; ...): ", function(input) {
        const items = input.split(';').map(itemStr => {
            const [unitPrice, quantity] = itemStr.split(',').map(Number);
            return { unitPrice, quantity };
        });

        // Check for valid items
        if (items.some(item => isNaN(item.unitPrice) || isNaN(item.quantity) || item.quantity < 0)) {
            console.log("Please enter valid numbers for unit price and quantity.");
        } else {
            const totalCost = calculateTotalCost(items);
            console.log(`The total cost of items in the cart is: Rs. ${totalCost.toFixed(2)}`);
        }

        rl.close();
    });
}

// Start the program
getCartItems();
