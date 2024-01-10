// lexical scope

const myVar = "value1";

function myApp(){

    function myFunc(){
        const myFunc2 = ()=>{
            console.log("inside myFumc" ,myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}

myApp();

//Lexical scope is the ability for a function scope to access variables from the parent scope
