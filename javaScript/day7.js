console.log("DAY 7");

//OBJECTS
const student = {
  name: "Jawad",
  age: 19,
  fatherName: "Ali",
};

const fruits = new Object();
fruits.name = "Apple";

console.log(fruits);
console.log(student);

student.bloodGroup = "B+";

console.log(student);

const studentKeys = Object.keys(student);

const studentValues = Object.values(student);

const studentData = Object.entries(student);

// console.log(studentData);

console.log(studentValues);

// console.log(studentKeys);

student.height = "5.9";

student["course"] = "Frontend Development";

student.course = "Video Editing";

// Object.freeze(student);

// student.course = "Graphic Designing";

// delete student.course;

Object.seal(student);

student.dob = "2000 May, 05";

student.height = "6.4";

for (let keys in student) {
  console.log(`${keys} : ${student[keys]}`);
}
