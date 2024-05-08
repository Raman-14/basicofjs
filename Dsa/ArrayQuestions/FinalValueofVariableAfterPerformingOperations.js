var finalValueAfterOperations = function(operations) {
    let x = 0;
    let y = 0;
    while(x<operations.length){
        if(operations[x] === "--X"){
            --y;
        }else if(operations[x] === "X--"){
            y--;
        }
         else if(operations[x] === "X++"){
            y++;
        }else if(operations[x] === "++X"){
            ++y;
        }
        x++;
    }
    return y;
};

operations = ["--X","X++","X++"];
console.log(finalValueAfterOperations(operations));