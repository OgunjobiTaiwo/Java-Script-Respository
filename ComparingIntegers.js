const prompt = require('prompt-sync')();
let userInput = Number(prompt("Enter first number : "));

let square = userInput * userInput;

if (userInput > 100 || square > 100){
	console.log("Its  both bigger Square and Number");
}
else if (userInput === 100 || square === 100){
	console.log("Its  both the same Square and number");
}
else{
	console.log("Its  both smaller Square and Number")
}


