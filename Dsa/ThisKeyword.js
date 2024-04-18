function createCounter(){
    return{
        count : 0,
        increment : function(){
            counter1.count++;
        }
    }
}

// console.log(createCounter.count);

let counter1 = createCounter();
counter1.increment();
console.log(counter1);

