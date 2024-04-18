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

    makeTree(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right===null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    levelOrderTraversal(){
        if(this.root === null) return [];

        const queue = [this.root];
        const result = [];

        while(queue.length>0){
            const node = queue.shift();
            result.push(node.value);

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        return result;
    }

    leftView() {
    if (!this.root) return [];

    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (i === 0) {
                result.push(node.value); // Add the first node at each level to the result
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}
}

let bst = new BSTree();
bst.makeTree(40);
bst.makeTree(10);
bst.makeTree(20);
bst.makeTree(15);
bst.makeTree(50);
bst.makeTree(45);
bst.makeTree(55);

console.log(bst.levelOrderTraversal());

console.log(bst.leftView());
