const prompt = require('prompt-sync')();
let userInput = Number(prompt("Enter  number : "));
if( userInput % 3 === 0){
	console.log(userInput + " is divisible by 3");
}
else{
    console.log("Not divisible by 3");
}
