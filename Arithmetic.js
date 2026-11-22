const prompt = require('prompt-sync')();
let userInput1 = Number(prompt("Enter first number : "));
let userInput2 = Number(prompt("Enter Second  number : "));

let square1 = userInput1 * userInput1;
let square2 = userInput2 * userInput2;

let sum = square1+ square2;
let difference = square1 -square2

console.log(square1);
console.log(square2);
console.log(sum);
console.log(difference);

