// console.log("Hello World")

//CONDITIONAL STATEMENTS
// IF ELSE

let userAge = 18;

if (userAge >= 18) {
  console.log("User Age is 18+, and user is eligible for CNIC");
} else {
  console.log("User Age is less 18, and user is not eligible for CNIC");
}

let userPassword = "qwerty12345@a";
let userTypedPassword = "qwerty12345@a";

if (userTypedPassword === userPassword) {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}

let number = 100;

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero (0)");
}

let userMarks = 991;

if (userMarks > 100) {
  console.log("Marks can be less than or equals to 100");
} else if (userMarks > 90) {
  console.log("A+");
} else if (userMarks > 80) {
  console.log("A");
} else if (userMarks > 70) {
  console.log("B+");
} else if (userMarks > 60) {
  console.log("C");
} else {
  console.log("FAIL");
}

let userLogin = true;
let productAvailable = false;

if (userLogin && productAvailable) {
  console.log("You can purchase this item");
} else if (!userLogin) {
  console.log("Please login to purchase");
} else if (!productAvailable) {
  console.log("Out of stock");
} else {
  console.log("Server Error");
}

let dbEmail = "abc@nsf.com";
let typedEmail = "abc123@nsf.com";

let dbPassword = "123";
let typedPassword = "123";

if (typedEmail === dbEmail && typedPassword === dbPassword) {
  console.log("Login successful");
} else if (!typedEmail === dbEmail) {
  console.log("Email does not exist");
} else {
  console.log("Invalid Credentials");
}
