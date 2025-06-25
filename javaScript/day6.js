console.log("DAY 6");

//SWICTH CASES

let number = 73;

if (number % 2 === 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}

let userInput = "Coke Cola";

switch (userInput) {
  case "Coke Cola":
    console.log("User has requested, COKA COLA");
    break;
  case "Miranda":
    console.log("User has requested, Miranda");
    break;
  case "Pepsi":
    console.log("User has requested, Pepsi");
    break;

  default:
    console.log("Item not available");
    break;
}

// let num1 = 20;
// let num2 = 30;
// let operation = prompt("Enter operator");

// switch (operation) {
//   case "+":
//     console.log(`${num1} ${operation} ${num2} = ${num1 + num2}`);
//     break;

//   case "-":
//     console.log(`${num1} ${operation} ${num2} = ${num1 - num2}`);
//     break;

//   case "/":
//     console.log(`${num1} ${operation} ${num2} = ${num1 / num2}`);
//     break;

//   case "*":
//     console.log(`${num1} ${operation} ${num2} = ${num1 * num2}`);
//     break;

//   default:
//     console.log("Invalid operation");
//     break;
// }

//WHITE LOOP - chalta rahega jab tak consition false na ho

// DO WHILE LOOP - Kam say kam aik martaba chalayga

//OBJECT - PRIMITIVE DATA TYPE

const student = {
  name: "Fahad",
  age: 21,
  course: "Frontend Development",
};

let studentName = "Fahad";
let studentAge = 21;

const studentFormData = {
  firstName: "Faheem",
  lastName: "Ahmed",
};

const signUp = {
  username: "asdasdasdas",
  email: "asdasd@asdas.com",
  password:
    "a34n123n123jk12n3jk1 4kj12312jkn312jk3n12jk3n12jk312nk3j12n3jk12n4jkwen23 441ln12jkl3n3jkrb24kj412jk",
};

console.log(student.name);

console.log(student.course);

const studentData = {
  name: "Ahmed",
  isActive: false,
};

if (studentData.isActive) {
  console.log("User is available");
} else {
  console.log("User is not available");
}
