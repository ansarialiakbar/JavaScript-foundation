const readline = require('readline');

// Creating readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findHighestMarks(marks) {
    // Use the ternary operator to find the highest marks
    const highest = marks[0] > marks[1] ? 
                    (marks[0] > marks[2] ? 
                     (marks[0] > marks[3] ? 
                      (marks[0] > marks[4] ? marks[0] : marks[4]) 
                      : (marks[3] > marks[4] ? marks[3] : marks[4]))
                     : (marks[2] > marks[3] ? 
                        (marks[2] > marks[4] ? marks[2] : marks[4]) 
                        : (marks[3] > marks[4] ? marks[3] : marks[4])))
                    : 
                    (marks[1] > marks[2] ? 
                     (marks[1] > marks[3] ? 
                      (marks[1] > marks[4] ? marks[1] : marks[4]) 
                      : (marks[3] > marks[4] ? marks[3] : marks[4]))
                     : (marks[2] > marks[3] ? 
                        (marks[2] > marks[4] ? marks[2] : marks[4]) 
                        : (marks[3] > marks[4] ? marks[3] : marks[4])));

    console.log(`The highest marks scored by any student is: ${highest}`);
}

// Asking for inputs using readline
const marks = [];

const askForMarks = (i) => {
    if (i < 5) {
        rl.question(`Enter marks for student ${i + 1}: `, function(input) {
            marks.push(parseFloat(input)); // Convert input to a float
            askForMarks(i + 1); // Recursive call to ask for next student's marks
        });
    } else {
        findHighestMarks(marks);
        rl.close();
    }
};

askForMarks(0);
