// Ques 3 : 
// Implement a first in first out (FIFO) queue using only two stacks. 
// The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).


var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.enqueue = function(x) {
    this.stack1.push(x)
};

// stack1 = []
// stack2 = []
MyQueue.prototype.dequeue = function() {
    if(this.stack2.length === 0){
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
};


MyQueue.prototype.front = function() {
    if(this.stack2.length === 0){
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1];
};


MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};


const queue = new MyQueue();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(56);
queue.enqueue(98);
queue.dequeue();
console.log(queue.front());
