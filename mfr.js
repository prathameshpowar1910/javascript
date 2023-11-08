//* map method 

const marks = [10, 20, 30, 40, 50];

const passedMarks = marks.map((mark) => {
  return mark >= 30;
});
//console.log(passedMarks);

//* filter method 

const ages = [56,78,61,32,15,28,69]

// const seniorCitizens = ages.filter((age)=> age >= 60)
const seniorCitizens = ages.filter((age)=>{
  return age >= 60
})

// console.log(seniorCitizens)
