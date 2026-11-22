const prompt = require('prompt-sync')();
let radius = Number(prompt("Enter radius of circle : "));

console.log((2 * radius )+ " is diameter");
console.log((2 * 3.14159 * radius )+ " is diameter");
console.log((3.14159 * radius * radius)+ " is diameter");
