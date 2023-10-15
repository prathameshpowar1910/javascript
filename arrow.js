//? Arrow function does not have ***this*** keyword because

// const add = (a, b) => {
//   return a + b; //?implicit return
// }

// const add = (a, b)=> a + b;
// const add = (a, b)=> (a + b); //?explicit return

// console.log(add(55, 1));

// const user = () => ({username: 'Andrew', age: 27, location: 'Philadelphia'}) //? returns object
// const user = () => {username: 'Andrew', "age": 27, location: 'Philadelphia'} //? throws error
const user = () => {username: 'Andrew'} //? returns undefined

console.log(user());
