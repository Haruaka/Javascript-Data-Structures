const Queue = require('./Queue');
"use-strict"

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.value = data;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add (value) {
        let tempNode = new Node (value),
            addNode = (tempNode, newNode) => {
                if(tempNode.value > newNode.value) {
                    if(!tempNode.left) {
                        tempNode.left = newNode;
                    }

                    else {
                        addNode(tempNode.left, newNode);
                    }
                }

                else {
                    if(!tempNode.right) {
                        tempNode.right = newNode;
                    }
                    else {
                        addNode(tempNode.right, newNode);
                    }
                }
            };

        if (this.root === null) {
            this.root = tempNode;
        }

        else {
            addNode(this.root, tempNode);
        }
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

                if (tempNode.left !== null) {
                    tempQueue.add(tempNode.left);               
                }

                if (tempNode.right !== null) {
                    tempQueue.add(tempNode.right);
                }
            }

            return countQueue;
        }
    }

    printTree() {
        let tempQueue = this.levelOrderTraversal();
        while (tempQueue.getSize() > 0) {
            console.log(tempQueue.remove().value);
        }
    }
}

let newBST = new BST();
newBST.add(8);
newBST.add(4);
newBST.add(9);
newBST.add(2);
newBST.add(6);

console.log(newBST.printTree());