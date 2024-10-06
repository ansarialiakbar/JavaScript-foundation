const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate rental cost
function calculateRentalCost(days, carType) {
    let dailyRate;

    // Determine the daily rate based on the car type
    switch (carType.toLowerCase()) {
        case 'economy':
            dailyRate = 4000; // Economy car rate
            break;
        case 'midsize':
            dailyRate = 10000; // Midsize car rate
            break;
        case 'luxury':
            dailyRate = 20000; // Luxury car rate
            break;
        default:
            return "Invalid car type. Please enter 'Economy', 'Midsize', or 'Luxury'.";
    }

    // Calculate total cost
    const totalCost = dailyRate * days;
    return `The total rental cost for ${days} days of ${carType} car is Rs. ${totalCost}/-`;
}

// Asking for input using readline
rl.question("Enter the number of days rented: ", function(daysInput) {
    const days = parseInt(daysInput); // Convert input to an integer

    if (isNaN(days) || days <= 0) {
        console.log("Please enter a valid number of days.");
        rl.close();
        return;
    }

    rl.question("Enter the type of car (Economy, Midsize, Luxury): ", function(carType) {
        const rentalCost = calculateRentalCost(days, carType);
        console.log(rentalCost);
        rl.close();
    });
});
