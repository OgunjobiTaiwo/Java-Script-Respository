const prompt = require('prompt-sync')();
let userInput = Number(prompt("Enter first number : "));
let largest = userInput;
let smallest = userInput;

for(let count = 1 ; count <= 5 ; count++);{
	let userInput = Number(prompt("Enter  number : "));
	if (userInput > largest){
		console.log(userInput + " largest");
	}
	else{
		console.log(largest);
	}
	
	if (userInput < smallest){
		console.log(userInput + " smallest");
	}
	else{
		console.log(smallest + "smallest");
	}

}

