// intro to arrays
//reference type

// how to create arrays

// ordered collection of items

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits[3]);

let numbers = [1,3,4,5];
console.log(numbers);

let mixed = [2,4.4,"js",undefined,null];
console.log(mixed);

fruits[1] = "banana";
console.log(fruits);

let obj={}; // object literal hai ye

console.log(typeof fruits); // array v ek object hai
console.log(typeof obj); // ye v object hai
console.log(Array.isArray(fruits)); // Array.isArray btata hai ki object array hai ya nai toh isme output true aayega
console.log(Array.isArray(obj)); // ye object hai lkn array nai hai toh output false aayega