class Node{
    constructor(value){
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

class BSTree{
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
        if(newNode.value>root.value){
            if(root.right=== null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
        }
        }else{
                if(root.left === null){
                    root.left = newNode;
                }else{
                    this.insertNode(root.left, newNode);
                }
            }
        
    }

    treeSize(root){
        if(root === null){
            return 0;
        }
        return this.treeSize(root.left) + this.treeSize(root.right) + 1;
    }
}

let bst = new BSTree();
bst.makeTree(10);
bst.makeTree(9);
bst.makeTree(4);
bst.makeTree(5);
bst.makeTree(20);
bst.makeTree(25);
bst.makeTree(21);
bst.makeTree(26);
console.log(bst);

console.log("size of the node =", bst.treeSize(bst.root));

