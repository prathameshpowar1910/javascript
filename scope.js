//* Scope of var,const and let

// let a = 5
// const b = 10
// var c = 15

// function scope() {
//   let a = 20
//   const b = 30
//   c = 40
//   console.log(`Function scope: ${a} ${b} ${c}`)
// }

// scope()
// console.log(`Global scope: ${a} ${b} ${c}`)


//* Function scope and closure

// function outer() {
//     const username = 'prathamesh'

//     function inner() {
//         const website = "youtube"
//         console.log(`Hello ${username}`)  //? username is accessible here because of closure
//     }
//     console.log(`Hello ${website}`)
//     inner()
// }

// outer()

// if (true) {
//     const username = 'prathamesh'
//     if (username === 'prathamesh') {
//         const website = " youtube"
//         console.log(`${username+website}`)
//     }
//     console.log(website)
// }

// console.log(username)

//* Functions,expression and hoisting

