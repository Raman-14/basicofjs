class Node{
    constructor(value, next){  // yaha new data type bnaye hai linked list ke liye jisme do chij hai value aur next value
        this.value=value;
        this.next=next;
    }
}

let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(2);
    head.next.next.next = new Node(1);
    head.next.next.next.next = new Node(2);
    head.next.next.next.next.next = new Node(0);
    head.next.next.next.next.next.next = new Node(2);
    head.next.next.next.next.next.next.next = new Node(2);


    let zeroHead = new Node(0); // yaha new node bnaye hai jiske ps first number ka address hai
    let oneHead = new Node(0);
    let twoHead = new Node(0);

    let zeroTail = zeroHead;  // same linkedlist mein aur ek pointer zeroTail daal diye hai jiska use baad mein tail ka address rakhne ke liye krenge
    let oneTail = oneHead;
    let twoTail = twoHead;

    let current = head;
    function segregate(current){
        while(current !== null && current!==undefined){
            if(current.value === 0){
                zeroTail.next = current;
                zeroTail = zeroTail.next;
            }else if(current.value===1){
                oneTail.next = current;
                oneTail = oneTail.next;
            }else{
                twoTail.next = current;
                twoTail = twoTail.next;
            }
            current = current.next;

    }

    // zeroTail.next = oneHead.next;
    // oneTail.next = twoHead.next;
    // twoTail.next = null;
    // return zeroHead.next;
    console.log(zeroHead);

    if(zeroHead.next == null && oneHead.next==null){
        return twoHead.next;
    } else if (zeroHead.next == null){
        oneTail.next = twoHead.next;
        return oneHead.next;
    }else{
        console.log(54);
        zeroTail.next = oneHead.next;
     oneTail.next = twoHead.next;
     twoTail.next = null;
        return zeroHead.next;
    }

    }

    let sortedList = segregate(current);

    function printNode(head){
        let current = head;
        while(current !== null && current !== undefined){
        console.log(current.value);
        current = current.next;
        }
    }

    printNode(sortedList);




