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
// console.log(mySym.valueOf());
// console.log(myUser.name);
// console.log(myUser["age"]);
// console.log(myUser[mySym]);

myUser.email = "ojas@gmail.com";
// console.log(myUser.email);
// Object.freeze(myUser); //? this will freeze the object and we cannot change the values

myUser.greeting = function(){
    console.log(`Hello ${this.name}`);
}

// console.log(myUser.greeting());
// console.log(myUser.greeting);
// console.log(console.log(myUser.email));

// const tinderuser =  new Object() //? this is a constructor and is singleton

const superman = {};

superman.id = "sm";
superman.alias = "clark kent"
superman.powers= ["flight","super strength","x-ray vision","heat vision","cold breath","super speed"]
superman.isGood = true;
superman.origin = "krypton"
superman.enemies = ["Lex Luthor", "Doomsday"];
superman.fullname = {
    firstname: "Clark",
    lastname: "Kent",
    parents: {
        father: "Jor-El",
        mother: "Lara"
    }
}
superman.universe = "DC";

//! look into what is optional chaing in js

const wonderWoman = {};

wonderWoman.id = "ww";
wonderWoman.alias = "Diana Prince";
wonderWoman.powers = ["Superhuman strength", "Lasso of Truth", "Bulletproof bracelets"];
wonderWoman.isGood = true;
wonderWoman.origin = "Themyscira";
wonderWoman.enemies = ["Ares", "Cheetah", "Circe"];
wonderWoman.fullname = {
    firstname: "Diana",
    lastname: "Prince",
    parents: {
        mother: "Hippolyta"
    }
}
wonderWoman.universe = "DC";

const ironMan = {};

ironMan.id = "ironman";
ironMan.name = "Iron Man";
ironMan.alias = "Tony Stark";
ironMan.powers = ["Powered Armor Suit", "Genius-level intellect", "Advanced technology gadgets"];
ironMan.isGood = true;
ironMan.origin = "Earth";
ironMan.enemies = ["Mandarin", "Whiplash", "Ultron"];
ironMan.fullname = {
    firstname: "Tony",
    lastname: "Stark",
    parents: {
        father: "Howard Stark",
        mother: "Maria Stark"
    }
}
ironMan.universe = "Marvel";

// const allSuperheroes = [superman, wonderWoman, ironMan];
// const allSuperheroes = Object.assign({},superman,wonderWoman,ironMan); //? this will merge all the objects into one and works only when the properties are not same
// const allSuperheroes = {...superman,...wonderWoman,...ironMan}; //? this will merge all the objects into one and works only when the properties are not same
// console.log(allSuperheroes); 

// console.log(typeof Object.keys(ironMan))
// console.log(Object.keys(ironMan)) //? this will return all the keys of the object
// console.log(Object.values(ironMan)) //? this will return all the values of the object
// console.log(Object.entries(ironMan)) //? this will return all the entries of the object

// console.log(ironMan.hasOwnProperty('enemies')) //? this will return true if the property is present in the object

//* Object Destrcuturing

// const {name,alias,powers} = ironMan; //? this will create the variables with the same name as the properties of the object
// console.log(name,alias,powers);

// const {name: theName} = ironMan; //? this will store the name property's value in theName variable
// console.log(theName);

//* APIs

//! JSON ke properties are always in double quotes
// const api = 'https://jsonplaceholder.typicode.com/users';
const api = 'https://api.github.com/users/prathameshpowar1910';

fetch(api)
    .then((response)=>{
        console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

