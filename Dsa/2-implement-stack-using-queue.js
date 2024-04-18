// Ques 2 : Implement Stack using  Queue
// Implement a last -in -first -out(LIFO) stack using only two queues.
// the implemented stack should support all the functions of a stack(push, pop, top, )

var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
}

// q1 = [2,3,4]
// q2 = []
// push(1); // agar 1 push krna hai toh
// q1 = [3,4]  // pehle q1 ka element shift krenge
// toh sbse pehle 2 shift hoga qki queue fifo follow krta hai
// q2 = [2] // fir q2 mein push krenge
// q1 = [4]
// q2 = [2,3]
// q1 = []
// q2 = [2,3,4] // aise krke jb sb q1 se q2 mein shift ho jaayega
// q1 = [1]  // fir 1 q1 mein push krenge
// q2 = [2,3,4]  
// q1 = [1,2]  // uske bd fir q2 ka element sb
// q1 mein push krte jaayenge
// q2 = [3,4]
// q1 = [1,2,3]
// q2 = [4]
// q1 = [1,2,3,4]
// q2 = []

MyStack.prototype.push = function(x){
    while(this.q1.length !==0){
        this.q2.push(this.q1.shift());
    }
    this.q1.push(x);
    while(this.q2.length !== 0){
        this.q1.push(this.q2.shift())
    }
}

MyStack.prototype.pop = function (){
   return this.q1.shift();
}

MyStack.prototype.top = function(){
    return this.q1[0];
}

MyStack.prototype.empty = function(){
    return this.q1.length === 0;
}

var stack = new MyStack();

stack.push(2);
stack.push(3);
stack.push(56);
stack.push(98);
stack.pop();

console.log(stack.top());
