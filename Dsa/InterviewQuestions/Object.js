
// In JavaScript, an object is a composite data type that allows you to store collections of key-value pairs, where each key is a unique identifier (property) and each value is the data associated with that key. Objects are one of the core components of the language and are used to represent complex data structures and entities.

const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("hello, my name is " + this.name);
    }
};

// objects javascript mein dynamic hai mtlb isme hum add, modify aur delete kr skte hai properties aur method ko runtime mein

person.city = 'New York';
person.age = 31;
delete person.isStudent;

// properties aur methods ko object ka hmlog access kr skte hai dot notation(person.name) ya bracket notation(person[name]) ka use krke

console.log(person.name);
console.log(person['age']);
person.greet();