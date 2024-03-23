import * as readline from 'readline';

// Function to add two numbers
function add(a: number, b: number): number {
    return a + b;
}

// Function to subtract two numbers
function subtract(a: number, b: number): number {
    return a - b;
}

// Function to multiply two numbers
function multiply(a: number, b: number): number {
    return a * b;
}

// Function to divide two numbers
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Function to perform calculations based on operator
function calculate(a: number, b: number, operator: string): number {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            throw new Error("Invalid operator");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Enter the operator (+, -, *, /): ', (operator) => {
            try {
                const result: number = calculate(Number(num1), Number(num2), operator);
                console.log("Result:", result);
            } catch (error) {
                console.error("Error:", error instanceof Error ? error.message : error);
            }
            rl.close();
        });
    });
});
