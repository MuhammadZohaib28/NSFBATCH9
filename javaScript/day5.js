// console.log("DAY 5")

//LOOPS
// 1 - FOR LOOP
// 2 - WHILE LOOP
// 3 - DO WHILE LOOP

for (let i = 1; i <= 500; i++) {
  console.log(`SNO - ${i}`);
}

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6

// let tableNumber = prompt("Please enter any number")

// for (let j = 1; j <= 10; j++) {
//   console.log(`${tableNumber} x ${j} = ${tableNumber * j}`);
// }

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(`This is even number: ${i}`);
  } else {
    console.log(`This is odd number: ${i}`);
  }
}

//WHILE LOOP

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// ATM PIN

let correctPin = "1234";
let userEnteredPin = "";
let attempt = 0;

while (userEnteredPin !== correctPin && attempt < 3) {
  userEnteredPin = prompt("Please enter PIN");
  attempt++;

  if (userEnteredPin !== correctPin && attempt < 3) {
    console.log(`WRONG PASSWORD, attempts left ${3 - attempt}`);
  }
}

if (userEnteredPin === correctPin) {
  console.log("LOGIN SUCCESS");
} else {
  console.log("Account Locked");
}
