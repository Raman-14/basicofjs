// and or operator

let name = "Raman";
let age = 17;

// if(name[0]==='R'){
//     console.log("you are inside if");
// }

// if(age>18){
//     console.log("you are inside if");
// }

if(name[0] === 'R' && age > 18){
    console.log("you are inside if")
}else{
    console.log("you are inside else")
};
if(name[0] === 'R' || age > 18){
    console.log("you are inside if")
}else{
    console.log("you are inside else")
};