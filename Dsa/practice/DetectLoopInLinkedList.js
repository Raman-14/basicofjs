class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let head = new Node(3,null);
 head.next = new Node(2,null);
 head.next.next = new Node(0,null);
 head.next.next.next = new Node(-4,null);
 head.next.next.next.next = head.next;

 function printlinked(head){
    let current = head;
    while(current!=null){
        console.log(current.value);
        current = current.next;
    }
 }

function detectLoop(head){
      //your code here
        let fast = head;
        let slow = head;
    
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
    
            if (slow === fast) {
                return true; // Loop detected
            }
        }
    
        return false; // No loop detected
    }
console.log(detectLoop(head));
//  printlinked(head);