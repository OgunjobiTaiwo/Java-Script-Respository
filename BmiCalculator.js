const prompt = require('prompt-sync')();
let weight = Number(prompt("Enter weight in pounds : "));
let height= Number(prompt("Enter heigth in Inches: "));

let BMI = ((weight *703 ) / (height *height));
if (BMI >= 25){
	console.log("Overweigth");
}
else if (BMI > 18.5 ){
	console.log("Healthy weight");
}
else{
	console.log("Underweight");
}
	
	


console.log(BMI);
