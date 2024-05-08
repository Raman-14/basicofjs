// Higher-order function map
// takes an array and a function as arguments
// applies the function to each element of the array and returns a new array with the results

function map(array, func){
    const newArray = [];
    for(let i = 0; i<array.length; i++){
        newArray.push(func(array[i]));
    }
    return newArray;
}

function square(x){
    return x * x;
}

const numbers = [1,2,3,4]
const squaredNumber = map(numbers, square);
console.log(squaredNumber);