function outerFunction() {
    let outerVariable = 'I am from outerFunction';

    function innerFunction(){
        console.log(outerVariable);
    }

    return innerFunction;
}

let closure = outerFunction();
closure();
// Even though outerFunction has finished executing, innerFunction still has access to outerVariable due to closure.

// In simpler terms, a closure is formed when an inner function has access to the outer function's variables, even after the outer function has returned.

// closure tab form krta hai jb inner function ke paas outer function ka variable ka access hota hai, outer function ke execute ho jaane ke baad bhi
