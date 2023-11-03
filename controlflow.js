const age = 20;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

const isMale = false;
if (isMale) console.log("i am a male"); //? never use this syntax in production code as it is not readable and can cause bugs in the future if you add more code to the if statement block without adding curly braces to the block of code in the if statement block 

const Name = "";
if (!!Name) { //? !!Name is a shorthand for Boolean(Name)
    console.log("Your name is " + Name);
} else {
    console.log("You don't have a name");
}

const day = 7;

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("chutiya hai kya bhai day 1 se 7 tak hai lavde gaand mara le")
        break;
}

//! Truthy Values

// 1. All numbers except 0
// 2. All strings except empty strings
// 3. true
// 4. {}
// 5. []
// 6. function(){}

//! Falsy Values
// 1. 0
// 2. ""
// 3. undefined
// 4. null
// 5. NaN
// 6. false
// 7. -0
// 8. 0n

//? Nullish Coalescing Operator (??) (ES2020 Feature) : null undefined
//* It is used to check if a value is null or undefined and if it is then it returns the value on the right side of the operator else it returns the value on the left side of the operator

let val1 = 5 ?? 10
console.log(val1) //* 5
val1 = null ?? 10
console.log(val1) //* 10
val1 = undefined ?? 10
console.log(val1) //* 10
val1 = null ?? 15 ?? 20
console.log(val1) //* 15

//? Short Circuiting (&& and ||)
//* && returns the first falsy value and || returns the first truthy value

console.log(0 && 1) //* 0
console.log(1 && 2) //* 2
console.log(0 || 1) //* 1
console.log(1 || 2) //* 1

//? Ternary Operator (?:)
//* It is used to write if else statements in a single line

const age1 = 20
const isAdult = age1 >= 18 ? true : false
console.log(isAdult) //* true