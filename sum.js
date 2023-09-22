const prompt = require("prompt-sync")();
function array() {
    let inputArray = [];
    let userInput;
    
    while (true) {
        userInput = prompt("Enter an element for the array (or enter an empty string to finish):");
        if (userInput === null || userInput === '') {
            break;
        }
        const number = parseFloat(userInput);
        if (!isNaN(number)) {
            inputArray.push(number);
        } else {
            console.log("Invalid input. Please enter a valid number.");
        }
    }

    return inputArray;
}
let arr = array();
console.log("User input array:", arr);
function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }

    return sum;
}
const result = sumOfSquares(arr);
console.log("Sum of squares:", result);