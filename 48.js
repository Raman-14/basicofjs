// callback functions

function myFunc2(name){
    console.log("inside my Func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func");
    callback("raman");
}

myFunc(myFunc2);