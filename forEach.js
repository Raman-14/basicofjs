// forEach method function callback krta 
// isme forEach mein value fir uske bd index pass hota hai 
const numbers = [4,2,5,8];

// isme pehle array fir forEach uske bd fir arrow function mein number aur index paas hgya numbers array ka
numbers.forEach((number, index)=>{
    console.log(`number is ${number} and index is ${index}`);
})

const person = [
    {name: "raman", age: "24"},
    {name: "aman", age:29},
    {name: "nidhi", age:27}
]

person.forEach((person)=>{
    console.log(person.name , person.age);
})