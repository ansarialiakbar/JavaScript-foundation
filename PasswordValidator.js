const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

rl.question("Enter your password: ", function(password) {
    rl.question("Confirm your password: ", function(confirmPassword) {
        validatePassword(password, confirmPassword);
        rl.close();
    });
});
