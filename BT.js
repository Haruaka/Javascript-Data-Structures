const Queue = require('./Queue');

class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    levelOrderTraversal() {
        if (this.root === null) {
            return;
        }

        else {
            let countQueue = new Queue(),
                tempQueue = new Queue(),
                tempNode = this.root;

            tempQueue.add(tempNode);
            countQueue.add(tempNode);

            while (tempQueue.getSize() > 0) {
                tempNode = tempQueue.remove();
                if(tempNode.value !== this.root.value) {
                    countQueue.add(tempNode);
                }

                if(tempNode.left !== null) {
                    tempQueue.add(tempNode.left);
                }

                if (tempNode.right !== null) {
                    tempQueue.add(tempNode.right);
                }
            }

            return countQueue;
        }
    }

    preOrderTraversal(node) {
        let str = "";
        if(node) {
            str += node.value;
            str += this.preOrderTraversal(node.left);
            str += this.preOrderTraversal(node.right);
        }
        return str;
    }

    inOrderTraversal(node) {
        let str = "";
        if(node) {
            str += this.inOrderTraversal(node.left);
            str += node.value;
            str += this.inOrderTraversal(node.right);
        }
        return str;
    }

    postOrderTraversal(node) {
        let str = "";
        if(node) {
            str += this.postOrderTraversal(node.left);
            str += this.postOrderTraversal(node.right);
            str += node.value;
        }
        return str;
    }

    //Adds a node to the first avaliable spot in the tree (level-order)
    add(value) {
        let tempNode = new Node(value);

        if (this.root === null) {
            this.root = tempNode;
        }

        else {
            let tempQueue = this.levelOrderTraversal();

            while (!tempQueue.isEmpty()) {
                if(tempQueue.peek().left === null) {
                    tempQueue.peek().left = tempNode;
                    return;
                }

                else if (tempQueue.peek().right === null) {
                    tempQueue.peek().right = tempNode;
                    return;
                }

                tempQueue.remove();
            }
        }
    }

    //Checks if there is a node with the given value exists in the tree. 
    find (value) {
        if (this.root === null) {
            return false;
        }

        else if (this.root.value === value) {
            return true;
        }

        else {
            let tempQueue = this.levelOrderTraversal();
            while(!tempQueue.isEmpty()){
                let tempNode = tempQueue.remove();
                if(tempNode.value = value) {
                    return true;
                }
            }
            return false;
        }
    }

    //removes the last node in the tree
    remove() {
        if(this.root === null) {
            return;
        }
        
        else if (this.root.right === null && this.root.left !== null) {
            this.root.left = null;
        }

        else if (this.root.right === null && this.root.left === null) {
            this.root.right = null;
        }

        else {
            let tempQueue = this.levelOrderTraversal(),
                tempNode = "";

            while(tempQueue.getSize() > 3) {
                tempNode = tempQueue.remove();
            }
            console.log(tempNode.value);
            if(tempNode.right !== null) {
                console.log(tempNode.right);
                tempNode.right = null;
                console.log(tempNode.right);
            }
    
            else if (tempNode.left !== null) {
                console.log(tempNode.left);
                tempNode.left = null;
                console.log(tempNode.left);
            }
        }
    }

    //Prints a tree in level order traversal
    printTree() {
        let tempQueue = this.levelOrderTraversal();
        while(!tempQueue.isEmpty()) {
            console.log("Value: " + tempQueue.peek().value);
            tempQueue.remove();
        }
    }
}

let newBT = new BinaryTree();
for (let i = 1; i < 6; i++) {
    newBT.add(i);
}
newBT.printTree();
console.log(newBT.preOrderTraversal(newBT.root));
console.log(newBT.inOrderTraversal(newBT.root));
console.log(newBT.postOrderTraversal(newBT.root));
