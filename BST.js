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
        if(this.root !== null) {
            this.root = new Node(value);
        }

        else {
            let tempNode = this.root;

            while (tempNode.left || tempNode.right) {
                if (value < tempNode.value) {
                   if(tempNode.left === null) {
                        tempNode.left = new Node(value);
                        return;
                   } 

                   else {
                        tempNode = tempNode.left;
                   }
                }

                else {
                    if (tempNode.right === null) {
                        tempNode.right = new Node(value);
                        return;
                    }

                    else {
                        tempNode = tempNode.right;
                    }
                }
            }

            if(value < tempNode.value) {
                tempNode.left = new Node(value);
            }

            else {
                tempNode.right = new Node(value);
            }
        }
    }
}