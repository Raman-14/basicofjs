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
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        } 
       }

       treeHeight(root){
            if (root === null) {
                return -1; // Height of an empty tree is -1
            }
        
            const leftHeight = this.treeHeight(root.left);
            const rightHeight = this.treeHeight(root.right);
        
            return Math.max(leftHeight, rightHeight) + 1;
       }


       levelOrderTraversal(){
        const height = this.treeHeight(this.root);
        for(let i = 1; i<=height+1; i++){
            this.printCurrentLevel(this.root, i);
        }
       }
       printCurrentLevel(root, level){
        if(root === null){
            return;
        }
        if(level === 1){
            console.log(root.value + " ");
        }else if(level>1){
            this.printCurrentLevel(root.left, level - 1);
            this.printCurrentLevel(root.right, level - 1);
        }
       }

       levelOrderTraversal1() {
        if (this.root === null) return [];

        const queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }


}

let bst = new BSTree();
bst.makeTree(30);
bst.makeTree(10);
bst.makeTree(11);
bst.makeTree(9);
bst.makeTree(40);
bst.makeTree(39);
bst.makeTree(41);

// bst.levelOrderTraversal();

console.log(bst.levelOrderTraversal1());