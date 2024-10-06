class BankAccount {
    constructor(name, initialBalance) {
        this.name = name; // Customer's name
        this.balance = initialBalance; // Customer's balance
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount; // Update the balance
            console.log(`Deposit successful! New balance for ${this.name}: Rs. ${this.balance.toFixed(2)}`);
        } else {
            console.log("Deposit amount must be positive!");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount; // Update the balance
            console.log(`Withdrawal successful! New balance for ${this.name}: Rs. ${this.balance.toFixed(2)}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal!");
        } else {
            console.log("Withdrawal amount must be positive!");
        }
    }

    // Method to get the current balance
    getBalance() {
        return this.balance; // Return the current balance
    }
}

// Create a new bank account
const customer1 = new BankAccount("Alice", 5000);

// Example transactions
customer1.deposit(1500);    // Deposit money
customer1.withdraw(2000);   // Withdraw money
customer1.withdraw(10000);  // Attempt to withdraw more than the balance
customer1.deposit(-300);     // Attempt to deposit a negative amount

// Check current balance
console.log(`Current balance for ${customer1.name}: Rs. ${customer1.getBalance().toFixed(2)}`);
