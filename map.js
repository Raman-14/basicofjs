// map method
const numbers = [3,4,5,6,7];

const square = function(number){
    return number * number;
}

// map return mein new array dega isliye jruri hai ki function mein return krna hga

const squareNumber = numbers.map(square);
// console.log(squareNumber);

const person = [
    {name: "raman", age:25},
    {name: "aman", age:27},
    {name: "man", age: 29}
]

const users = person.map((user)=>{
    // console.log(user.name);
    return user.name;
})
console.log(users);