const prompt = require('prompt-sync')();
let userInput = Number(prompt("Enter a 5 digit  number: "));

let digit1 = userInput/1000;
let sepDigit1 = digit1 % 10;

let digit2 = userInput/1000;
let sepDigit2 = digit2% 10;

let digit3 = userInput/1000;
let sepDigit3 = digit3 % 10;

let digit4 = userInput/1000;
let sepDigit4 = digit4 % 10;


let sepDigit = sepDigit4 % 10;

console.log (sepDigit1 , sepDigit2 , sepDigit3 , sepDigit4 , sepDigit);
