// setTimeout() function ka use ek function ya piece of code ko execute krne ke liye hota hai ek time ke baad jo milliseconds mein hota hai

// isko commonly use kiya jaata hai delays, animations, ya asynchronous operations mein jisko execute krna hai kch period of time ke baad

// basic syntax of setTimeout() function:

// setTimeout(callbackFunction, delay);

//callbackFunction => function jisko execute krna hai kch delay ke baad
// delay => the time(in milliseconds) to wait before executing the function

// example of setTimeout()

function sayHello(){
    console.log('hello, world!');
}

//execute the sayHello function after 2 seconds (2000 milliseconds)
setTimeout(sayHello, 2000);

// execute an anonymous function after 3 seconds

setTimeout(function(){
    console.log('this is executed after 3 seconds');
}, 3000);
