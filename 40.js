// arrow function

// const singHappyBirthday = function(){
//     console.log("happy birthday to you.....");
// }

const singHappyBirthday = ()=> console.log("Happy Birthday To You!");

singHappyBirthday();

// const sumThreeNumbers = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }

const sumThreeNumber = (number1, number2, number3) =>number1 + number2 + number3;
console.log(sumThreeNumber(4, 5 ,6));

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = (number) => number%2 ===0;

console.log(isEven(4));

// const firstChar = function(anyString){
//     return anyString[0];
// }

const firstChar = (anyString) => anyString[0];


console.log(firstChar("hellow"));


// const findTarget = function(array, target){
//     for(let index in array){
//         if(array[index]===target){
//             return index;
//         }
//     }
//     return -1;
// }

const findTarget = (array, target) => {
    for(let index in array){
        if(array[index]===target){
            return index;
        }
    }
    return -1;
}

console.log(findTarget([2,3,4,5,6,7,8,9], 3));