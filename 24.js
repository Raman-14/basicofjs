//primitive vs reference data type

let num1 = 2;
let num2 = num1;
console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);

num1++;
console.log(`after incrementing`);
console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);

// toh ye primitive data type hai qki isme num1 is equal to num2 kiye
//lkn num1 mein kch v change krne se num2 mein koi changes nai aara hai

//reference types
// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(`array1 is ${array1}`);
console.log(`array2 is ${array2}`);
array1.push("item3");
console.log("after pushing element to array 1");
console.log(`array 1 ${array1}`);
console.log(`array 2 ${array2}`);

// ye reference type hai qki isme array1 is equal to array2 kiye
// toh fir array1 mein koi v changes krre toh array2 mein v changes ho ra 
// aisa isliye hota hai qki primitive data type mein data jo hai stack mein store hota hai qki ye space km leta hai toh isme num1 aur num2 dono store hota hai dono alg alg space leta hai
// lekin array heap memory mein store hota hai aur stack mein uska ek pointer hoga jo array1 ka address store krega aur array2 ke liye aur ek pointer bnega stack mein jo bs wai address rakhega array1 toh isme array1 aur array2 same h hai isliye array 1 mein kch changes hoga toh array2 mein v rhega h