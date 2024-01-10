// param destructuring

// object
// react

const person = {
    firstName: "Raman",
    gender : "male",
    age: 23
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);