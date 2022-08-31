// Cloning an Object

const user = {
    name: 'Hilal',
    age: 17,
};

// const copiedUser = {};
// copiedUser.name = user.name;
// copiedUser.age = user.age;

// for (let key in user){
//     console.log(key, user[key]);
//     copiedUser[key] = user[key];
// }

const copiedUser = Object.assign({},user);

console.log(copiedUser)