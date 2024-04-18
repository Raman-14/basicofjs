class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree{
    constructor(){
        this.root = null;
    }

    makeBinaryTree(val){
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
            return this.insertNode(root.left, newNode);
        }
    }else{
        if(root.right === null){
            root.right = newNode;
        }else{
            return this.insertNode(root.right, newNode);
        }
    }
}

maximum(root){
    if(root === null){
        return -1;
    }else{
        return Math.max(root.value, Math.max(this.maximum(root.left), this.maximum(root.right)));
    }
}


}

let bst = new BSTree;
bst.makeBinaryTree(20);
bst.makeBinaryTree(18);
bst.makeBinaryTree(16);
bst.makeBinaryTree(22);
bst.makeBinaryTree(21);
bst.makeBinaryTree(25);

console.log(bst);

console.log(bst.maximum(bst.root));

