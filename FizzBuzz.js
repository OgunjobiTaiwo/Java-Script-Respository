const prompt = require('prompt-sync')();
for(let count = 1 ; count <= 100 ; count++){
let userInput = Number(prompt("Enter a number: "));
if (userInput % 5 === 0 && userInput % 3 === 0){
	console.log("FizzBuzz");
}
else if(userInput % 3 === 0){
	console.log("Fizz");
}
else if (userInput % 5 === 0){
	console.log("Buzz");
	}
else 
    console.log(count);
}

