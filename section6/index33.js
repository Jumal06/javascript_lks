// for.. of Loop

let numbers = [1,2,3,4,5];
console.log(numbers);

for (let index in numbers){
    console.log(index,numbers[index]);
}

for (let num of numbers){
    console.log(num);
}