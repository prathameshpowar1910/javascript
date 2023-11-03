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