function hammingWeight(number)
binarySum  = 0
while number > 0{

	binary = number % 2
	binarySum = binarySum + binary 
}
return binarySum

console.log(hammingWeight(7))








function isPalindromeNumber(number) {
if (number < 0) {
return false;
}

let originalNumber = number;
let reversed = 0;

while (number > 0) {
let lastDigit = number % 10;

reversed = reversed * 10 + lastDigit;

}

if (reversed === originalNumber) {
return true;
}
else {
return false;
}
}

console.log(isPalindromeNumber(121))







function countPrimes(upperLimit) {
let primeCount = 0;

let number = 2;

while (number < upperLimit) {
let isPrime = true;
let count = 2;

while (count < number) {
if (number % count  === 0) {
isPrime = false;
}
count = count + 1;
}


if (isPrime === true) {
primeCount += 1;
}

number += 1;
}

return primeCount;
}

console.log(countPrimes(10))

