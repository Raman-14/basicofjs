// spread operator

// sprear operator in array
// const array1 = [1,2,4];
// const array2 = [5,6,7];

// // const newArray = [...array1, ...array2];
// // console.log(newArray);  //[1, 2, 4, 5,6,7]
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 = {
    key1: "uniqueValue",
    key3: "value3",
    key4: "value4"
};

const newObject = {...obj1, ...obj2, key5: "value5"};
console.log(newObject);

const newObject2 = {..."1234567890"};
console.log(newObject2);