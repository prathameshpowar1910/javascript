//* For Of loop

const fruits = ["apples", "oranges", "grapes"];
for (const fruit of fruits) {
  //console.log(fruit);
}

const name = "Prathamesh Powar";
for (const char of name) {
  //console.log(char);
}

// Maps
const map = new Map(); // key value pairs - can use ANY type as a key or value and the order is maintained....also no duplicate keys
map.set("IN", "India");
map.set("US", "United States of America");
map.set("GB", "Great Britain");
map.set("RU", "Russia");
map.set("IN", "India"); // duplicate key - will be ignored
//console.log(map)

for (const [key, value] of map) {
  // console.log(key)
}

//* For in loop

const games = {
  game1: "Cricket",
  game2: "Football",
};

for (const game in games) {
  //console.log(game) // returns the keys
  //console.log(games[game]) // returns the values
}

const superHeroes = ["batman", "superman"];

for (const index in superHeroes) {
  //console.log(index) // returns the index
  //console.log(superHeroes[index]) // returns the values
}

//* forEach loop (it does not return anything and it is not chainable like map, filter, reduce)

const coding = ["js", "python", "java", "ruby", "cpp"];

coding.forEach((lang) => {
  //console.log(lang)
});

function printMe(lang) {
  //console.log(lang)
}

coding.forEach(printMe);

coding.forEach((lang, index, arr) => {
  //console.log(lang,index,arr)
});

const myCoding = [
  {
    languageName: "javascript",
    langageExtension: ".js",
  },
  {
    languageName: "python",
    langageExtension: ".py",
  },
  {
    languageName: "java",
    langageExtension: ".java",
  },
  {
    languageName: "ruby",
    langageExtension: ".rb",
  },
  {
    languageName: "cpp",
    langageExtension: ".cpp",
  },
];

myCoding.forEach((item)=>{
  //console.log(item.languageName)
})