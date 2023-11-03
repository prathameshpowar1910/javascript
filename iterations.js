//? For Loop
const array = ['superman','batman','ironman','spiderman','hulk']
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element) //* superman batman ironman spiderman hulk
}

//? break and continue
for (let i = 0 ; i<10 ; i++) {
    if (i===4) continue;
    if (i===8) break;
    console.log(i) //* 0 1 2 3 5 6 7
}

//? While Loop
let i = 0
while (i<10) {
    console.log(i) //* 0 2 4 6 8
    i = i+2
}

//? Do While Loop
let j = 0
do {
    j = j+2
    console.log(j) //* 2 4 6 8
} while (j<10)
