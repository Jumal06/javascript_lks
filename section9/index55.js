// Default Parameters

function calcSum(number1,number2,number3 = 60){
    let sum = number1 + number2 + number3;
    return sum;
}

console.log (calcSum(10,50));

// Function Expression

const calSumExp = function(number1,number2){
    let sum = number1 + number2;
    return sum;
}

console.log(calSumExp(50,60));