class Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

let head = new Node(0,null);
head.next = new Node(1,null);
head.next.next = new Node(2,null);
head.next.next.next = new Node(3,null);
head.next.next.next.next = new Node(4,null);

let del_node = head.next.next;

function delNode(del_node){
    let temp = del_node.next;    //  temp = del_node.next,  temp = 3;
		
    //copying the data of pointer in the given current node.
    del_node.value = temp.value;   // del_node.value = temp.value,   del_node.value = 3
    
    //storing the next node to pointer in link part of current node.
    del_node.next = temp.next;   //  del_node.next = 4;
    
    // freeing memory.
    temp = null;   // temp = null;
}

function printNode(head){
    let current = head;
    while(current !== null){
        console.log(current.value);
        current = current.next;
    }
}
delNode(del_node);
printNode(head);
