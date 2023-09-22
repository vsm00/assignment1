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
let userArray = array();
console.log("User input array:", userArray);

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function checkFirstElementPrime(userArray) {
    if (userArray.length === 0) {
        return "Array is empty";
    }

    const firstElement = userArray[0];

    if (isPrime(firstElement)) {
        return `${firstElement} is a prime number.`;
    } else {
        return `${firstElement} is not a prime number.`;
    }
}
console.log(checkFirstElementPrime(userArray));
