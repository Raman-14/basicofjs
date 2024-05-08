// let array = [1,2,3,4,5,6];
// let array1 = array.slice(1,4);
// console.log(array);
// console.log(array1);

let version1 = "1.01"
let version2 = "1.001"

let v1 = version1.split('.');
let v2 = version2.split('.');
let b1 = v1.map(function(str){
    return parseInt(str);
})
console.log(v1);
console.log(v2);
console.log(b1);
b1[2] = 4;
console.log(b1);