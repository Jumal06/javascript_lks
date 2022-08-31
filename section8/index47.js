// Traversing Object

const user = {
    name: 'Hilal',
    age: 17,
    gender: 'Male',
    Phone: '088888888',
    email: 'Hilal@gmail.com',
};

// one way
for (let key in user){
    console.log(key, user[key]);
}

//two key
console.log(Object.keys(user));
console.log(Object.values(user));

for (let val of Object.values(user)){
    console.log(val);
}