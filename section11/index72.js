// Array Feature : Array and Object Desructuring

function greeting(user){
    const {name,age, address} = user;
    const {long,lat } = address;
    console.log(`Hello ${name} and age ${age} form ${long}, ${lat}`);
}


const user = {
    name: 'Hilal',
    age: 40,
    address:{
        long: 343.343,
        lat: 2323.23,
    },
};

greeting(user);

let [a,b,c,d] = [1,2,3,4];
console.log(a,b,c,d);