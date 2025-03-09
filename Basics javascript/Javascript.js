// ***************************  01_Javascript_basics    *****************************
// console.log(`Hello`);
// console.log(`I like Pizza`);

// alert(`This is an alert`)
// alert(`I Like Pizza`)

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I like pizza`;

// This is  a comment

/* This is a comment*/ 

// ***************************    02_Variables    ********************************
// *************************************************************************************
// variable = A container that stores a Value.
//            Behaves as if it were the value it contain

// 1. declaration let x;
// 2. assignment  x = 100;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Tinku "
// let LastName = "Candy"

// console.log(typeof firstName);
// console.log(`your name is ${firstName + LastName}`);
// console.log(typeof gpa);
// console.log(`You are ${age} years old`);
// console.log(`the price is $${price}`);
// console.log(`your age is ${gpa}`);

// let check = true
// console.log(`Bro is online: ${check}`);
// console.log(`Is this car for sale: ${check}`);

// let fullName = "Tinku Candy";
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`
// document.getElementById("p2").textContent = `You are ${age} years old`
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`

/* This is a comment*/ 

// ***************************  03_Arithmetic_operators    *****************************
// *************************************************************************************
//  Arithmetic operators =  operands (values, Variables, etc)
//                          operators(+ - * / % **)
//                          ex. 11 = x + 5;

// let students = 30

    // students = students + 1;
    // students = students - 1;
    // students = students * 2;
    // students = students / 2;
    // students = students ** 2;
//  let extraStudents = students % 7;


    // students += 1;
    // students -= 1;
    // students *= 2;
    // students /= 2;
    // students **= 2;
    // students %= 7;
    //students++;
    //studnets--;

//  console.log(students);
//  console.log(extraStudents);
/* This is a comment*/


 
// ***************************  04_Accept user input    *****************************
// *************************************************************************************
 
// How to accept user input

// 1. Easy way = using windows prompt 
// 2. Professional way = HTML textbox

// username = prompt("What's your your_name?");
// console.log(username);

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }
/* This is a comment*/ 

// ***************************  05_Type conversions  *****************************

//  type conversion = change the datatype of a value to another
// (strings, numbers, booleans)

// let age = prompt(`how old are you`);
// age = Number(age);
// age+= 1;

// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza"; 
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);


// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// ***************************  06_Type conversions  *****************************
// ***************************  07_Type conversions  *****************************

// Counter Program
    const increaseBtn = document.getElementById("increaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const countLabel = document.getElementById("countLabel");
    let count = 0;

    increaseBtn.onclick = function(){
        count++;
        countLabel.textContent = count;
    }
    decreaseBtn.onclick = function(){
        count--;
        countLabel.textContent = count;
    }
    resetBtn.onclick = function(){
        count=0;
        countLabel.textContent = count;
    }
    



// ***************************  08_Type conversions  *****************************
// ***************************  09_Type conversions  *****************************
// ***************************  10_Type conversions  *****************************
// ***************************  11_Type conversions  *****************************
// ***************************  12_Type conversions  *****************************
// ***************************  13_Type conversions  *****************************
// ***************************  14_Type conversions  *****************************


// ***************************  14_Type conversions  *****************************