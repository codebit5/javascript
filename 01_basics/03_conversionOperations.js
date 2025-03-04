let score = "0";

console.log(typeof score);  
console.log(typeof(score)); 

let valueInNumber = Number(score);
console.log(typeof valueInNumber);  
console.log(valueInNumber);

let valueInString = String(score);
console.log(typeof valueInString);
console.log(valueInString);

// "33" => 33 (number)
// "33abc" => NaN (number)
// "33" => "33" (string)
// "33abc" => "33abc" (string)

let loggedIn = "ture"
let valueInBoolean = Boolean(loggedIn);
console.log(typeof valueInBoolean);
console.log(valueInBoolean);

// "33" => true && "33abc" => true (boolean)
// "" => false && " " => true (boolean)
// "0" => false && "1" => true (boolean)
// "tinku" => true (boolean)
// "null" or "undefined" or "NaN" => true (boolean)






