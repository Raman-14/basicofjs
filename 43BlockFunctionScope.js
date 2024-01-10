// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//     let x = 'I am a block scoped variable';
// }
// console.log(x); // ReferenceError: x is not defined

// let aur const block scope hai mtlb do bracket ke andr ka space block scope hota hai toh let aur const ka range ek block tk ka h hai usko hum uss block ke baahar mtlb bracket ke baahar se access nai kr skte hai aur hum same name se uss block ke baahar variable bhi bna skte hai dono alg alg hoga

{
    let x = 'block x range';
    console.log(x);
}
{
    let x = 'block with same name x range';
    console.log(x);
}

let x = "global scope";
console.log(x);

// lkn var ko hum access kr skte hai block ke baahar se bhi

{
    var y = "var scope range";
}
console.log(y); // Outputs: var scope range