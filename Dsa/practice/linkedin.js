class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let head = new Node('gvdp',null);
 head.next = new Node('telco',null);
 head.next.next = new Node('golmuri',null);
 head.next.next.next = new Node('sakchi',null);

function printLinkedList(head){
    let current = head;
    while(current!=null){
        console.log(current.value);
        current = current.next;
    }
}
// printLinkedList(head);

function insert(head){
    let tail = head;
    while(tail.next!=null){
        tail = tail.next;
    }
    tail.next = new Node('bistupur', null);
}
insert(head);
// printLinkedList(head);

function deletenode(head, node){
    let current = head;
    let previous = null;
    while(current!=null){
        // console.log(current.next.value, 35);
        // console.log(node);
        if(current.value === node){
            previous.next = current.next;
        }
        previous = current
        current = current.next;
    }
}

let node = 'golmuri';
deletenode(head, node);
printLinkedList(head);



