// nested if else

// winning number 19

// 19 your guess is right
// 18 too low
// 21 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("your guess is right!!!");
}else{
    if(userGuess<winningNumber){
        console.log("too low");
    }else{
        console.log("too high!!!")
    }
}