function fizzbuzz (a){
	if (a%3===0 && a%5 ===0){
		return("FizzBuzz")
	}
	else if( a%3 ===0){
	
		return("Fizz")
	}
	else if  (a%5 ===0){
		return("Buzz")
	}
}
const value = fizzbuzz(9)
	//console.log(value)
	


function  isPowerofTwo(number){
for(let count =1 ; count <= number ; count++){
    if (number%2 ===0){
    power =  2 ** count
    return true
}
else {
    return false
   }
   
  }
 }
 const number = isPowerofTwo(16)
    //console.log(number)
    


function mySqrt(number){
    squareRoot = number** 0.5
    
        
    return squareRoot
}

const output = mySqrt(8)
console.log(output)



function checkPerfectNumber(digit){
let sum = 0
for (let count = 1 ; count < digit ; count++){
    if (digit % count === 0){
        sum = sum + count;
        }
    }
    if (sum === digit){
        return true
    }
    else{
        return false
    }

 }
 console.log(checkPerfectNumber(6))
 
 
 
 
  function reverseInteger(number)
  let digit = x
  reverse = 0
  while(digit>0){
  
     result = result * 10 +(digit % 10);
     digit = Math.Floor(digit/10);
  }
     return reverse 
  }
  console.log(reverseInteger(543));
  
