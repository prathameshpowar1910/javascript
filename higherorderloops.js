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


