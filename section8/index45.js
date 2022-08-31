const user = {
    name:'Hilal',
    age: 40,
    isMarried: true,
};

// ADD 
user.email = 'Hilal@gmail.com';

let key = 'Hilal123';
user[key] = 'aftyffuyagi';
user['phone'] = '088888';

// UPDATE
user.isMarried = false;
user.age = user.age + 5;

//DELETE
delete user.age;