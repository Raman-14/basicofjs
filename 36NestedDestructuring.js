// nested destructuring

const users = [
    {userId: 1, firstName: 'Raman', gender: 'male'},
    {userId: 2, firstName: 'mohit', gender: 'male'},
    {userId: 3, firstName: 'saloni', gender: 'female'}
]

const[{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);