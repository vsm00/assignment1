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
let mf = 1;  
var cf = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 cf++;
                if (mf<cf)
                {
                  mf=cf; 
                  item = arr[i];
                }
        }
        cf=0;
}
console.log("most frequent=",item+" ( " +mf +" times ) ") ;