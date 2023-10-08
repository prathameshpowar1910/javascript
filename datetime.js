// let currentDate = new Date().getTime();
// console.log(currentDate);
// setTimeout(() => {
// let futureDate = new Date().getTime();
// console.log(new Date().getTime());
// console.log(futureDate.getTime() - currentDate.getTime());
// },1000);

//* Date object
/*const currentDate = new Date();
console.log(currentDate)  
console.log(currentDate.toDateString()) 
console.log(currentDate.toLocaleDateString())
console.log(currentDate.toLocaleTimeString())
console.log(currentDate.toLocaleString())
console.log(currentDate.toString())*/

//* Customised date and time
/* const mydate = new Date(2023,9,19,13,30,2,10)
const mydate = new Date("10-19-2003")
const mydate = new Date("Oct 19 2003")
const mydate = new Date("October 19 2003")
const mydate = new Date("2003-10-19")
const mydate = new Date("2003/10/19")
const mydate = new Date(2003,10,19)
console.log(mydate.toString())*/

//* Date methods
// const myTimeStamp = new Date.now()
// console.log(myTimeStamp)

const myDate = new Date("Oct 19 2003")

console.log(myDate.toLocaleString('default',{
    weekday:'long',
    timeZone:'Asia/Kolkata'
}));

// setInterval(() => {
//     console.log(new Date().toLocaleTimeString())
// },1000);