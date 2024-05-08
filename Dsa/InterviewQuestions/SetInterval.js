// setInterval() function ka use humlog koi function ya piece of code ko br br execute ek fixed time intervals pe krne ke liye krte hai

// iska commonly used hmlog timers, animations, aur waisa kaam jisko baar baar krna hai usko krne ke liye krte hai

// setInterval(callbackFunction, interval);

//example

function sayHello() {
    console.log('hello, world!');
}

setInterval(sayHello, 2000);

// ye function 2000milliseconds(2seconds) ke time interval pr repeatedly execute hte rhega

// aur ye tb tk hote rhega jb tk setInterval ko clear nai krte hai

// anonymous function ko execute krte hai hr 3 seconds pe

setInterval(function(){
    console.log('this is executed every 3 seconds');
}, 3000);

function greet(name) {
    console.log('Hello, ' + name + '!');
}

  // Execute the greet function with parameter every 1 second
setInterval(greet, 1000, 'Alice');
