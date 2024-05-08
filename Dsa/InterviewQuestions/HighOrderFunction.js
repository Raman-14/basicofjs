// higher-order function ek concept hai functional programming mein jaha pr function apne argument mein function le sakta hai and / or function result mein return karta hai

// ya bol skte hai higher-order function ya toh ek ya ek se jayda function as a argument le sakta hai ya return mein function de skta hai ya dono

function applyOperation(operation, a, b){
    return operation(a,b);
}

function add(x,y){
    return x + y;
}

console.log(applyOperation(add, 2, 3));
// output 5

// isme applyOperation higher order function hai qki ye another function (add function) accept krta hai apne operation parameter ke liye

function createMultiplier(factor){
    return function(x){
        return x * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5));
