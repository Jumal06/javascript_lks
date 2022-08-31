// Object Methods and This keyword

const user = {
    name:'Hilal',
    age: 17,
    isMarried: true,
    friends : ['Hilal','Rafif'],
    selectColor : null,
    calculateAge: function(){
        console.log(`I am ${this.age} Hilal Rafif`)
    }
};

user.calculateAge();