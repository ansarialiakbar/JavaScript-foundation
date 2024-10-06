const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the total bill and share per person
function calculateBill(dishCosts, numPeople) {
    const totalBill = dishCosts.reduce((acc, cost) => acc + cost, 0); // Sum all dish costs
    const sharePerPerson = (numPeople > 0) ? (totalBill / numPeople) : 0; // Calculate share per person
    return {
        totalBill: totalBill,
        sharePerPerson: sharePerPerson
    };
}

// Asking for input using readline
rl.question("Enter the costs of dishes (comma separated): ", function(dishInput) {
    const dishCosts = dishInput.split(',').map(cost => parseFloat(cost.trim())); // Parse costs to numbers

    // Filter out any NaN values to avoid calculation issues
    if (dishCosts.some(isNaN)) {
        console.log("Please enter valid numbers for dish costs.");
        rl.close();
        return;
    }

    rl.question("Enter the number of people sharing the bill: ", function(peopleInput) {
        const numPeople = parseInt(peopleInput); // Convert input to an integer

        if (isNaN(numPeople) || numPeople <= 0) {
            console.log("Please enter a valid number of people.");
        } else {
            const { totalBill, sharePerPerson } = calculateBill(dishCosts, numPeople);
            console.log(`Total Bill: Rs. ${totalBill.toFixed(2)}`);
            console.log(`Each person pays: Rs. ${sharePerPerson.toFixed(2)}`);
        }

        rl.close();
    });
});
