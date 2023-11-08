//* map method

const marks = [10, 20, 30, 40, 50];

const graceMarks = marks.map((mark) => mark + 10);
// console.log(graceMarks);

const newMarks = marks
  .map((mark) => mark * 2) // [20, 40, 60, 80, 100]
  .map((mark) => mark - 10) // [10, 30, 50, 70, 90]
  .filter((mark) => mark > 30); // [50, 70, 90]

console.log(newMarks)

//* filter method

const ages = [56, 78, 61, 32, 15, 28, 69];

// const seniorCitizens = ages.filter((age)=> age >= 60 && age <= 70)
const seniorCitizensUnder70 = ages.filter((age) => {
  return age >= 60 && age <= 70;
});
// console.log(seniorCitizensUnder70)
