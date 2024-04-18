// Ques 1 : Circular Queue Implementation
// Design your implementation of the circular queue. the circular queue is a linear data structure in which the operation are performed based on First In First Out principle.
// and the position is connected back to the first position to make a circle.

var MyCircularQueue = function(k){
    this.queue = [];
    this.size = k;
}

MyCircularQueue.prototype.enQueue = function(value){
    if(this.size === this.queue.length) return false;
    this.queue.push(value);
    return true;
}

MyCircularQueue.prototype.deQueue = function (){
    if(this.queue.length === 0) return false;
    this.queue.shift();
    return true;
}

MyCircularQueue.prototype.front = function () {
    if (this.queue.length === 0) return -1;
    return this.queue[0];
}

MyCircularQueue.prototype.rear = function () {
    if(this.queue.length === 0) return -1;
    return this.queue[this.queue.length-1];
}
MyCircularQueue.prototype.isEmpty = function () {
   return (this.queue.length === 0);
}

MyCircularQueue.prototype.isFull = function () {
    return this.size === this.queue.length;
}

var obj = new MyCircularQueue(3);  // size is 3
obj.enQueue(1);  // [1,_,_]
obj.enQueue(2);  // [1,2,_]
obj.enQueue(3);  // [1,2,3]
// console.log(obj.enQueue(4));  // false queue is full [1,2,3]
obj.deQueue(); // [2,3,_]
obj.enQueue(5);  //  [2,3,5]
console.log(obj.front(), obj.rear());