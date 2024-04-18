class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



class BSTree {
    constructor(){
        this.root = null;
    }

    makeTree(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(root.value>newNode.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    getHeight(root) {
        if (root === null) {
            return -1; // Height of an empty tree is -1
        }
    
        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);
    
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(3);
bst.makeTree(2);
bst.makeTree(25);
bst.makeTree(23);

// const height = bst.getHeight;
console.log(bst.getHeight(bst.root));