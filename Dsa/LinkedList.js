// LinkedList
// example :- O--O--O--O--O
// linkedlist mtlb chain 
// ab har chain do chij hold karta hai
// value aur direction next chain ka

// toh ab isko bnane ke liye new data type bnana hga

class Node{
    constructor(value, next){
        this.value = value;
        this.next = next; // ye v data type hai ye v node hoga
    }
}

let startingPoint = new Node('gvdp',null );
startingPoint.next = new Node('telco', null);
startingPoint.next.next = new Node('nildih', null);
startingPoint.next.next.next = new Node('Golmuri', null);

// console.log(startingPoint);
function printLinkedList(startingPoint){
    // let current = startingPoint
    while(startingPoint != null){
        console.log(startingPoint.value, '->');
        startingPoint = startingPoint.next;
    }
}

// printLinkedList(startingPoint);

function insertNewLinkedList(startingPoint){
    // let newNode = null;
    let currentLocation = startingPoint;
    while(currentLocation.next != null){
        currentLocation = currentLocation.next;
    }
        // (startingPoint.next == null){
        currentLocation.next = new Node('sakchi', null);
}

insertNewLinkedList(startingPoint);
// printLinkedList(startingPoint);

let target = 'Golmuri'
function search(startingPoint, target){
    let currentLocation = startingPoint; // currentLocation = startingpoint // gvdp
    while(currentLocation !== null){  // gvdp != null // telco != null ; true // nildih != null , false // golmuri, false
        if(currentLocation.value === target){ // gvdp == golmuri // false // telco == golmuri; false // nildih , false // golmuri, true
            return currentLocation.value
        }
        currentLocation = currentLocation.next; // telco // nildih // golmuri
    }
    return -1;
}

// console.log(search(startingPoint, target));
// console.log(search(startingPoint, 'tinplate'));

function findLengthLinkedList(startingPoint){
    let currentLocation = startingPoint;
    let length = 0;
    while(currentLocation !== null){
        length++;
        currentLocation = currentLocation.next;
    }
    return length;
}

// console.log(findLengthLinkedList(startingPoint));

let deleteLocation = 'Golmuri';

function deleteLinkedList(startingPoint, deleteLocation){
    let currentLocation = startingPoint; // currentLocation = gvdp
    let previous = null;
    while(currentLocation !== null){  // gvdp, false // telco, false
        if(currentLocation.value === deleteLocation){ // gvdp, false // telco
            previous.next = currentLocation.next;
            break;
        }
        previous = currentLocation; 
        currentLocation = currentLocation.next; // telco
    }
}

// deleteLinkedList(startingPoint, deleteLocation);
printLinkedList(startingPoint);

function reverse(startingPoint){
    let prev = null;
    let current = startingPoint;
    let next = null;
    while(current != null){
        next = current.next;
        current.next = prev;
        prev = current;
        // console.log(prev)
        current = next;
    }
    return prev;
}
startingPoint = reverse(startingPoint);
// reverse(startingPoint);
console.log(98);
printLinkedList(startingPoint);





