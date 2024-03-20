class Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

let start = new Node(1,null);
start.next = new Node(2,null);
start.next.next = new Node(1,null);

let print = (start) =>{
    while(start!=null){
        console.log(start.value,'=>')
        start = start.next;
    }
}

console.log(print(start));

 function detectLoop(head)
    {
        //your code here
            let slow = head;
            let fast = head;
        while(head!=null){
            slow=slow.next;
            fast=fast.next.next;
            if (slow.value==fast.value){
                return true;
            } else false;
        }
    }

    console.log(detectLoop(head));
