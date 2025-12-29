```const message: string = "Hello Typescript";

const firstName: string = "Korn Sophanrottany";

const SecondName: string = "San  Tola";

const SweetLover: string = `${firstName} Lover ${SecondName}`;

console.log(SweetLover);

//  control-flow in typescript

// const input = prompt("Enter your age:")

// if (input === null) {
//   console.log("No input provided")
// } else {
//   const age: number = Number(input)

//   if (isNaN(age)) {
//     console.log("Please enter a valid number")
//   } else if (age >= 13 && age <= 19) {
//     console.log("You are a teenager")
//   } else {
//     console.log("You are an adult")
//   }
// }

const age = 21;
if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Adult");
}
