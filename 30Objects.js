// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
// const person = {name:"Harshit", age:22};

const person = {
    name: "Raman",
    age: 22,
    hobbies:["guitar", "sleeping", "listening music"]
}

console.log(person);

// how to access data from objects
// isko access krne ke liye hmlog dot notation ka use kiye hai
// isko hum bracket notation se v access kr skte hai
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies[1]);

// // how to add key value pair to objects
// person.gender = "male";
// console.log(person);

// bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"][1]);

person["gender"] = "male";
console.log(person);