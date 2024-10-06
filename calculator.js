const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}

rl.question("Enter the first number: ", function(input1) {
    const num1 = parseFloat(input1);

    rl.question("Enter the second number: ", function(input2) {
        const num2 = parseFloat(input2);

        rl.question("Enter the operator (+, -, *, /): ", function(operator) {
            calculator(num1, num2, operator);
            rl.close();
        });
    });
});
