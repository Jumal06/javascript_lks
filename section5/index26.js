// Problem : FizzBuzz
// Take a Number
// If it is divisible by 3, Print Fizz
// If it is divisible by 5, Print Buzz
// If it is divisible by both 3 & 5 print Fizzbuzz
// otherwise, print Nothing.

let number = 16;

console.log(
    number % 3 === 0 && number % 5 === 0
    ? 'Fizzbuzz'
    : number % 3 === 0
    ? 'Fizz'
    : number % 5 === 0
    ? 'Buzz'
    : 'Nothing'
);