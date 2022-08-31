// Finding Object in Array

const doctors = [
    {name: 'Hilal', age: 17},
    {name: 'Sulthan', age: 17},
    {name: 'Rafif', age: 16},
];

const result = doctors.find(function(doctor){
    return doctor.age > 17;
});

console.log(result);