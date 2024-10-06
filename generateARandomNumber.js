// Self-invoking arrow function to generate a random number between 1 and 100
(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Generated Random Number: ${randomNumber}`);
})();