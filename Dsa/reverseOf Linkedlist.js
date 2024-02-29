var head;
 
class Node {
   constructor(val) {
       this.data = val;
       this.next = null;
   }
}

/* Function to reverse the linked list */
function reverse(node) {
var prev = null;
var current = node;
var next = null;
   while (current != null) { // current = 85  //  current = 15, true // current = 4, true  
       next = current.next; //  next = 15  //  next = 4  //  next = 20
       console.log("next value = ", next)
       current.next = prev;  // current.next = null  // current.next = 85  // current.next = 15
       console.log("cuurent.next value = ", current.next);
       prev = current;  // prev = 85  // prev = 15   // prev = 4
       console.log("prev value = ", prev);
       current = next;  // current = 15  // current = 4  // current = 
       console.log("current value = ",current);
   }
   node = prev;
   return node;
}

// prints content of double linked list
function printList(node) {
   while (node != null) {
       console.log(node.data + " ");
       node = node.next;
   }
}

// Driver Code

   head = new Node(1);
   head.next = new Node(2);
   head.next.next = new Node(3);
   head.next.next.next = new Node(4);

//    document.write("Given linked list<br/>");
   printList(head);
   head = reverse(head);
//    document.write("<br/>");
//    document.write("Reversed linked list<br/> ");
   printList(head);

