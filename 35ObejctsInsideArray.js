// objects inside array
// very useful in real world applications

const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Rain', age:29}
];

for(let user of users){
    console.log(user.name);
    console.log(user.age);
}