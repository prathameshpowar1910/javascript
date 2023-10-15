//* Immediately Invoked Function Expression (IIFE)

(function chai() {
    //named IIFE
    console.log('Chai is a tea');
})(); //! here semi-colon is required

//? the function is called immediately after it is defined
//? the firt () is the function expression and the second () is the function call
//! the function is not accessible outside of the function scope
//! the function is used to prevent naming collisions or global scope pollution

((name)=>{
    //anonymous IIFE
    console.log(`My name is ${name}`);
})('prathamesh')