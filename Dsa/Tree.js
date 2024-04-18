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

    search(data){
        return this.searchNode(this.root, data);
    }
    searchNode(node, data){
        if(node === null){
            return false;
        }
        if(data<node.val){
            return this.searchNode(node.left, data);
        }else if(data>node.val){
            return this.searchNode(node.right,data);
        }else{
            return true;
        }
    }

    inorderTraversal(root = this.root, result = []) {  
        // console.log(root, result);
        if (root) {
            this.inorderTraversal(root.left, result);
            // result.push(root.val);
            console.log(root.val);
            this.inorderTraversal(root.right, result);
        }
        return result;
    }
    preorderTraversal(root = this.root, result = []) {  
        // console.log(root, result);
        if (root) {
            console.log(root.val);
            this.preorderTraversal(root.left, result);
            // result.push(root.val);
            this.preorderTraversal(root.right, result);
        }
        return result;
    }
    postorderTraversal(root = this.root, result = []) {  
        // console.log(root, result);
        if (root) {
            this.postorderTraversal(root.left, result);
            // result.push(root.val);
            this.postorderTraversal(root.right, result);
            console.log(root.val);
        }
        return result;
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
// console.log(bst.root.left.left.left);
// console.log(bst.search(8));

const inorder = bst.inorderTraversal();
const preorder = bst.preorderTraversal();
const postorder = bst.postorderTraversal();
// console.log(inorder); // Output: [3, 5, 10, 20, 23, 25]