// function expression

// function singHappyBirthday(){
//     console.log("happy birthday to you ....");
// }

const singHappyBirthday = function(){
    console.log("happy birthday to you.....");
}
singHappyBirthday();

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }

const sumThreeNumbers = function(number1, number2, number3){
    return number1 + number2 + number3;
}

const returnedValue = sumThreeNumbers(2,3,4);
console.log(returnedValue);


// function isEven check whether the number is even or not and give the output in true for even and false for odd

// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(5));

const isEven = function(number){
    return number % 2 === 0;
}
console.log(isEven(4));

// function return the first char of string

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("what"));

const firstChar = function(anyString){
    return anyString[0];
}
console.log(firstChar("hello world"));

// function to find the index of the target number in array

// function findTarget(array, target){
//     for(let index in array){
//         if(array[index] === target){
//             return index;
//         }
//     }
//     return -1;
// }

// console.log(findTarget([2,3,4,5,6,7,8,9], 2));

const findTarget = function(array, target){
    for(let index in array){
        if(array[index]===target){
            return index;
        }
    }
    return -1;
}

console.log(findTarget([2,3,4,5,6,7,8,9],5));