class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enque(element, priority){
        // this.items.push(element);
        const item = {element, priority};

        let added = false;

        for(let i = 0; i< this.items.length; i++){
            // items[0] -----> {element: 'A', priority: 5}
            // input items ----> {element: 'B', priority: 3}
            // {..., {element: 'B', priority: 3}, {element: 'A', priority: 5},...}
            if(item.priority < this.items[i].priority){
                this.items.splice(i,0,item);
                added = true;
                break;
            }
            // this.items.push(item);
        }
        if(!added){
            this.items.push(item);
    }
    }

    deque(){
        if(!this.isEmpty()){
            return this.items.shift();
        }
        else{
            return null;
        }
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        else{
            return null;
        }
    }

    isEmpty(){
        return this.items.length == 0;
    }

    clear(){
        this.items = [];
    }

    sizeOfQueue(){
       return this.items.length;
    }

    printQueue(){
        // return this.items.toString();
        let str = '';
        for(let i = 0; i<this.items.length; i++){
            str = str + `{element : ${this.items[i].element}, priority: ${this.items[i].priority}}`;
        }
        return str;
    }
}

let myQueue = new PriorityQueue();

myQueue.enque(10,2);
myQueue.enque(20,4);
myQueue.enque(30,1);
myQueue.enque(40,3);

console.log(myQueue.printQueue());