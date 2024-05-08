class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
       return this.queue.shift();
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.queue.length;
    }

    front(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.queue[0];
    }

    print(){
       let queueString = "";
        for(let i = 0; i<this.queue.length; i++){
            queueString += this.queue[i] + ", "
        }
        console.log(queueString);
    }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.dequeue();
console.log(myQueue.front());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
myQueue.print();

