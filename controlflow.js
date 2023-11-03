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