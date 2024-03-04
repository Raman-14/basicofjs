class Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

let start = new Node(1,null);
 start.next = new Node(2,null);
 start.next.next = new Node(3,null);
 start.next.next.next = new Node(4,null);
 start.next.next.next.next = new Node(5,null);

//  let middleNode = (start) => {
//    let length = evenOdd(start);
//     if (length%2==0){
//        return length / 2;
//     }else return (length+1)/2 +1;
//  }

//  let length = 0;
//  function evenOdd(start){
//     while(start!=null){
//         length++;
//         start = start.next;
//     }
//     return length;
//  }

//  console.log(middleNode(start));

function getMiddle(start) {
        
    let slow = start;
    let fast = start;
    

    if(start === null){
        return -1;
    }
    
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.value;
 }
 console.log(getMiddle(start));
