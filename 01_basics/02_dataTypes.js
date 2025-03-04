// "use strict";  // treat all JS code as strict mode
console.log("Hello World!");
// number => 2 to power 53 - 1
// 2^53 - 1 is the maximum safe integer in JavaScript
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(9007199254740991);  // 9007199254740991 is safe
// 9007199254740992 is not safe

// BigInt
BigInt(9007199254740992);  // 9007199254740992n
// 9007199254740992 is not safe
console.log(9007199254740992);  // 9007199254740992 is not safe

// String
// String => "Hello World!"
// console.log("Hello World!");
// Boolean => true / false;
// console.log(true);
// console.log(false);
// null => null;
// console.log(null);
// undefined => undefined
// console.log(undefined);
// Symbol => Symbol()
// console.log(Symbol());
// // Object
// console.log({});  // {}
// console.log([]);  // []
// console.log(function(){});  // [Function (anonymous)]