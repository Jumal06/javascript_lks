// Object Destructuring

const user = {
    name: 'Hilal',
    age: 17,
    favBook:{
        bookname: 'Pejuang rupiah',
        bookauthor: 'xyz',
    },
};

const {name, age, favBook} = user;
const {bookname, bookauthor} = favBook;

console.log(name);
console.log(age);
console.log(bookname);
console.log(bookauthor);