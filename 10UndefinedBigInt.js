// undefined
// null

let firstName;
console.log(firstName);
// ye undefined output dega qki varibel defined nai kiya gaya hai

let myVariable = null;
console.log(myVariable);
// ye null output dega

console.log(typeof myVariable);
// ye object output dega ye javascript ka bug hai
// null ka typeof object dera lekin qki isko lekr bht saara coding ho chhuka hai bda bda project sb bna hai isliye javascript isko change nai krra 

//BigInt
const bigNum1 = BigInt(1024);
console.log(bigNum1);

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991 ye maximum integer hai 
// isse bda number agar store karna hai toh uske liye hum BigInt ka use karte hai
const bigNum2 = 12n;
//12n v bigint hai ye v ek way hai BigInt likhne ka 
console.log(bigNum2);