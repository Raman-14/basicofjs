// Basic Queue Implementation

class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return "underflow, cannot perform dequeue";
        }

        return this.queue.shift();
    }


    isEmpty(){
        return this.size() === 0;
    }

    front(){
        if(this.isEmpty()){
            return "no elements in the queue";
        }
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    printQueue(){
        let queueString = "";
        for (let i = 0; i < this.size(); i++) {
            queueString += this.queue[i] + ", " ;
            
        }
        console.log(queueString);
    }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(96);
myQueue.enqueue(786);

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.size());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.front());