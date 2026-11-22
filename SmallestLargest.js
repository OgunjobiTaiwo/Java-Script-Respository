const prompt = require('prompt-sync')();
let userInput = Number(prompt("Enter first number : "));
let sum = 0;
let product = 1 ;
let largest = userInput;
let smallest = userInput;
let average = 0;

for(let count = 1 ; count <= 2 ; count++){
	let userInput1 = Number(prompt("Enter  number : "));

	sum = sum + userInput;
	product = product * userInput;
	 
	if (userInput1 > largest){
		largest = userInput;
	}
	else{
		largest == largest;
	}
	if (userInput1 < smallest){
		smallest = userInput1;
	}
	else{
		smallest = smallest;
	}
}
average = sum / 3 ;

console.log(sum);
console.log(average);
console.log(product);
console.log(largest + " is largest");
console.log(smallest + " is smallest");
