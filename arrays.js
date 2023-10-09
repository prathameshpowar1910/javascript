const marvel = ['iron man', 'spiderman', 'thor', 'hulk', 'captain america'];

const dc = new Array('superman', 'batman', 'flash');

//* Array Methods

marvel.push('black panther'); // Add to the end of the array
marvel.pop(); // Remove from the end of the array
marvel.unshift('captain marvel'); // Add to the beginning of the array
marvel.shift(); // Remove from the beginning of the array
console.log(marvel.indexOf('thor')); // Returns the index of the element
console.log(marvel.splice(1, 3)); // Removes the element at index 1 to 3 and returns the removed elements
console.log(marvel.reverse()); // Reverses the array
console.log(marvel.concat(dc)); // Concatenates the two arrays
console.log(marvel.sort()); // Sorts the array alphabetically
console.log(marvel.includes('thor')); // Returns true if the element is present in the array
console.log(marvel.join(' ')); // Joins the elements of the array with the specified separator
console.log(marvel.join()); // Joins the elements of the array with the specified separator
console.log(marvel.slice(1, 3)); // Returns the elements from index 1 to 3


// const heroes = marvel.concat(dc);
const heroes =  [...dc, ...marvel]; // Spread operator
console.log(heroes);

const anotherArray = [1,2,3,[4,5,6,[7,8,9]]];
const flatArray = anotherArray.flat(1); // Flattens the array to the specified depth value of depth can also be Infinity
console.log(flatArray);

console.log(Array.isArray(marvel)); // Returns true if the object is an array
console.log(marvel instanceof Array); // Returns true if the object is an array
console.log(marvel.toString()); // Converts the array to a string
console.log(Array.from('hello')); // Converts the string to an array
console.log(Array.from([1,2,3], x => x * 2)); // Creates a new array from the given array with the specified function
console.log(Array.from({name:'prathamesh'}, (v, i) => i)); // Creates a new array from the given array with the specified function
console.log(Array.of(1,2,3)); // Creates a new array from the given values