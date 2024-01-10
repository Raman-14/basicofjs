//how to clone array
// how to concatenate two arrays

let array1 = ["item1", "item2"];

// ab array 2 bnana hai array 1 ka copy lekin wo separate array hoga
// array 1 mein change krne se array 2 koi changes nai hoga

// iska teen way hai
// 1. slice method
// let array2 = array1.slice(0);

// 2. concat method
// let array2 = [].concat(array1);

// 3. spread operator
// let array2 = [...array1];

// ab hum chahte hai ki array1 ka element ke sath kch extra element bhi add krna toh iske liye
// let array2 = array1.slice().concat(["item3", "item4"]);

// let array2 = [].concat(array1, ["item3", "item4"]);

// let array2 = [...array1, "item3", "item4"];

//ab agar ek sath do array ek h array mein add krna hai toh
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];


array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);