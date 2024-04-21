class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let head = new Node('gvdp', null);
 head.next = new Node('telco', null);
 head.next.next = new Node('golmuri', null);
 head.next.next.next = new Node('sakchi', null);
 head.next.next.next.next = new Node('bistupur', null);

function reverse(head){
    let current = head;
    let previous = null;
    let next = null;
    while(current!= null){
        next = current.next;
        current.next = previous
        previous = current;
        current = next;
    }
    node = previous;
    return node;
};
// reverse(head);
function printreverse(node){
    let current = node;
    while(current!=null){
        console.log(current.value);
        current = current.next;
    }
};
head = reverse(head);
printreverse(head);