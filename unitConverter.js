const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Convert Celsius to Fahrenheit
}

// Asking for input using readline
rl.question("Enter the temperature in Celsius: ", function(input) {
    const celsius = parseFloat(input); // Convert input to a float
    if (isNaN(celsius)) {
        console.log("Please enter a valid number.");
    } else {
        const fahrenheit = celsiusToFahrenheit(celsius);
        console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`); // Output with 2 decimal points
    }
    rl.close();
});
