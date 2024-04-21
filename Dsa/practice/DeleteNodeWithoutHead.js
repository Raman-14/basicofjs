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

let del_node = head.next.next.next

function deleteNode(head, del_node){
    del_node.value = del_node.next.value;
    del_node.next = del_node.next.next;
}

function printNode(head){
    let current  = head;
    while(current!=null){
        console.log(current.value);
        current = current.next;
    }
}

printNode(head);
deleteNode(head, del_node);
printNode(head);

