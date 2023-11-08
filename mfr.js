//* map method

const marks = [10, 20, 30, 40, 50];

const graceMarks = marks.map((mark) => mark + 10);
// console.log(graceMarks);

const newMarks = marks
  .map((mark) => mark * 2) // [20, 40, 60, 80, 100]
  .map((mark) => mark - 10) // [10, 30, 50, 70, 90]
  .filter((mark) => mark > 30); // [50, 70, 90]

//console.log(newMarks);

//* filter method

const ages = [56, 78, 61, 32, 15, 28, 69];

// const seniorCitizens = ages.filter((age)=> age >= 60 && age <= 70)
const seniorCitizensUnder70 = ages.filter((age) => {
  return age >= 60 && age <= 70;
});
// console.log(seniorCitizensUnder70)

//* reduce method

const numbers = [10, 20, 30, 40, 50];

const initialValue = 0;

// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

const sum = numbers.reduce((acc, curr) => {
  // console.log(`acc: ${acc}, curr: ${curr}`);
  return acc + curr;
}, initialValue);

// console.log(sum);

const shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 10000,
  },
  {
    product: "screen guard",
    qty: 3,
    price: 100,
  },
  {
    product: "case",
    qty: 2,
    price: 500,
  },
];

const cartTotal = shoppingCart.reduce((acc,item)=> acc + item.price*item.qty, 0)

// const cartTotal = shoppingCart
//   .map((prod) => prod.qty * prod.price)
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(cartTotal);
