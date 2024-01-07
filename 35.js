// object destructuring
const band = {
    bandName : "led zeeplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir"
};

//object ka value ko variable mein store krne ke liye

let {bandName, famousSong, ...restProps} = band;
console.log(bandName);
console.log(famousSong);
console.log(restProps);