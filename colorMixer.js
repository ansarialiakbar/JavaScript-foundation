const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mixColors(color1, color2) {
    let result;

    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            result = "purple";
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            result = "orange";
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            result = "green";
            break;
        default:
            result = "Invalid color combination";
            break;
    }

    console.log(`When mixing ${color1} and ${color2}, the result is: ${result}`);
}

// Asking for inputs using readline
rl.question("Enter the first color: ", function(color1) {
    rl.question("Enter the second color: ", function(color2) {
        mixColors(color1.toLowerCase(), color2.toLowerCase());
        rl.close();
    });
});
