const prompt = require('prompt-sync')();
let userInput1 = Number(prompt("Enter first number : "));
let userInput2 = Number(prompt("Enter Second  number : "));

let triple = userInput1 * 3;
let double = userInput2 * 2;

if(triple % double === 0){
	console.log("It is a multiple");
}

else{
	console.log("It is not a multiple");
}
