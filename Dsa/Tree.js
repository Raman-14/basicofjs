class Node {
    constructor(val,left,right){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor(){
        this.root = null;
    }

    isTreeEmpty(){
        return this.root === null;
    }

    makeTree(val){
        let newNode = new Node(val)
        if(this.root===null){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root, newNode){
        if(root.val>newNode.val){
            if(root.left===null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}

let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(3);
bst.makeTree(25);
bst.makeTree(23);
// console.log(bst);
console.log(bst.root.left.left.left);