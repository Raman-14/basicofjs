//rules for naming variable

//you cannot start with number
// example:-
// var 1value = 10;
// ye invalid dega

var value1 = 2;
console.log(value1 + 2);
console.log(value1 * 2);
console.log(value1 / 2); // it gives you remainder
console.log(value1 % 2); // it gives you quotient
console.log(value1 ** 2); // it means 2 power of 2
console.log(value1 ** 3); // it means 3 power of 2

// agar square root nikalna hai toh 
console.log(value1 ** 0.5); // it means 0.5 power of 2 mtlb square root of 2

// hmlog bs do symbol use kr skte hai varible naming mein
// underscore _
// dollar $

var first_name = 2; // underscore ka use krke hmlog kch naam dete hai toh usko snake case writing bolte hai
console.log(first_name);

var first$name = 2;
var $firstname = 3;


// hmlog space use nai kr skte hai
// var first name = 2; (invalid)

// ----------------------------------------------------
//convention

//start with small letter and use camelCase
//UpperCamelCase is typically used for class names
//lowerCamelCase is used for method, variable and parameter names