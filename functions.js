function greeting(username = "Iron Man") {
  return `I am ${username}`;
}

// console.log(greeting())
// console.log(greeting("Superman"))

function items(item1, ...allItems) {
  return allItems;
}

// console.log(items(10, 20, 30, 40, 50))

const user = {
  name: "Tony Stark",
  age: 45,
  address: {
    city: "New York",
    country: "USA",
  },
};

function handleObject(anyObject) {
  console.log(`User name is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user)
// handleObject({name: 'Bruce Wayne', age: 40})


