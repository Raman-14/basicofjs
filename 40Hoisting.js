// hoisting

hello();

function hello(){
    console.log("hello world");
}

// yhi hoisting hai function declare baad mein kiye hai pehle call kr diye tb bhi function execute ho jaara 
// ye function expression aur arrow function ke case mein nai hoga

console.log(hello);
const hello = "hello world";
// ye error dega aur let ke case mein v error output dega

console.log(hallo);
var hallo = "hallo world";
// ye undefined dega