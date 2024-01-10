// default parameters

function addTwo(a,b){
    if(typeof b ==="undefined"){
        b=0;
    }
    return a+b;
}

console.log(addTwo(2));

// default parameters mtlb agar do parameter pass krna hai aur hum sirf ek h parameter pass krre toh dusra parameter default 0 lele
// agar aisa hum nai krte hai toh output NaN aayega;
// isko hum aise bhi likh skte hai

function twoAdd(a,b=0){
    return a+b;
}

console.log(twoAdd(8));