// Rest Parameter

function muliply(...args){
    console.log(args);

    let mulp = 1;
    for (let num of args){
        mulp = mulp * num ;
    }
    return mulp;
    // return number1 * number2 * number3 * number4;
}
console,log(muliply(2,3,4,5,9,8));