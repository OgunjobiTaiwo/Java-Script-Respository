const prompt = require("prompt-sync")();
let weight= prompt("Enter weight: ");
let height= prompt("Enter height: ");

let BMI = ((703* weight) / (height *height));
if (BMI > 25 ){
    console.log("overweight");
}

console.log(typeof (weight));

