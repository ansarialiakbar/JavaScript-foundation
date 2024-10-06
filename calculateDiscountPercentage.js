const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrow function to calculate discount percentage
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0) {
        return 0; // Return 0 if original price is invalid
    }
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2); // Round off to two decimal places
};

// Function to get original and discounted price
function getPrices() {
    rl.question("Enter the original price of the product: ", function(originalInput) {
        const originalPrice = parseFloat(originalInput);

        rl.question("Enter the discounted price of the product: ", function(discountedInput) {
            const discountedPrice = parseFloat(discountedInput);

            if (isNaN(originalPrice) || isNaN(discountedPrice)) {
                console.log("Please enter valid numbers for prices.");
            } else {
                const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
                console.log(`The percentage of the discount is: ${discountPercentage}%`);
            }

            rl.close();
        });
    });
}

// Start the program
getPrices();
