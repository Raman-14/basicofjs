// Basic Stack Implementation

class Stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "stack is empty. Can't perform pop";
        }
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "stack is empty. Can't perform peek.";
        }
        // console.log(22);
        return this.stack[this.size() - 1];
    }

    isEmpty(){
        return this.size() === 0
    }

    size(){
        return this.stack.length;
    }
}

const stack = new Stack();

 stack.push(10);
 stack.push(9);
 stack.push(8);
 stack.push(7);
//  stack.push(6);

//  for(let i = 0; i<stack.size(); i++){
//     console.log(stack.stack[i]);
//  }

console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());

