console.log("DAY 3");

// DECLARATION OF VARIABLE
var lastName = "Zohaib";

{
  var firstName = "Muhammad";
}

var userAge = 25;

console.log(firstName);

// 1 - var
// 2- const
// 3 - let

var userAge = 21;

console.log(userAge);

{
  let userName = "Fahad";
  console.log(userName);
}

// const userAge = 23;
// console.log(userAge);

// OPERATORS
// 1 - ARTHIMATIC OPERATOR
// + - * / % **

// 2 - ASSIGNMENT OPERATOR
// =, +=, -=, *=

// 3 - COMPARISION OPERATOR
// ==, ===, <, >, <=, >=

// 4 - LOGICAL OPERATOR
// && - AND,  || - OR,    ! - NOT

let num1 = 2;
let num2 = 3;

let x = 10;
x += 5;

x = x + 5;

console.log(x);

let y = 15;
y *= 2;

console.log(y);

const n1 = 10;
const n2 = "10";

let registeredEmail = "amna@nsf.com";

let userEmailInput = "amna@nsf.com";

console.log(registeredEmail == userEmailInput);

let numm1 = 110;
let numm2 = 110;

console.log(numm1 <= numm2, "yeh less than wala operator hai");

let isLogin = false;
let isHavingIdCard = true;

console.log(isLogin && isHavingIdCard, "AND OPERATOR");

console.log(isLogin || isHavingIdCard, "OR OPERATOR");

console.log(!isLogin && isHavingIdCard);
