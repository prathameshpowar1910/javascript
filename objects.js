//? singleton is formed only when object is declared or created using a constructor

//* Object Literal

const mySym = Symbol('key1');

const myUser = {
    name: 'John',
    age: 32,
    // mySym:'key1value',//? this is not a symbol
    [mySym]:'key1value',//? this is a symbol
    email: 'prathamesh@gmail.com',
}
console.log(mySym.valueOf());
console.log(myUser.name);
console.log(myUser["age"]);
console.log(myUser[mySym]);

myUser.email = "ojas@gmail.com";
console.log(myUser.email);
Object.freeze(myUser); //? this will freeze the object and we cannot change the values