const prompt = require('prompt-sync')();
let positive = 0;
let negative = 0;
let zero = 0;

for(let count = 1 ; count <= 5 ; count++){
	let userInput = Number(prompt("Enter a number : "));
	
	if (userInput > 0){
		positive++
	}
	else if (userInput < 0){
		negative++
	}
	else{
		zero++
	}
}
console.log(positive + "Positive numbers");
console.log(negative + "Negative numbers");	
console.log(zero + "Zeros");

