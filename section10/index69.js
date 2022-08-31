// ES6 Feature : Map

let numbers = [1,2,3,4,5];

// let mulByTwo = [];

// for (let num of numbers){
//     mulByTwo.push(num * 2);
// }
// console.log(mulByTwo);

// const mulByTwo = numbers.map((num) => num * 2);
// console.log(mulByTwo);

let doctor = [
    {name: 'Hilal' , age: 17},
    {name: 'sulthan' , age: 16},
    {name: 'Rafif' , age: 18},
];

const docName = doctor.map((doc) => doc.age);
console.log(docName);