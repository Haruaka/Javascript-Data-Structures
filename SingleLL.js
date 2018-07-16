"use strict"

//A node class that contains some sort of data and an object next to it.
class Node {
    constructor(value) {
        this.next = null;
        this.data = value;
    }
}

/*A single linked list class that keeps track of the list's head, tail and length. 
It also contains all the default methods of a Linked List in O(N) complexity max.*/
class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Adds a node into the list and adjusts the list accordingly in O(1) complexity
    add(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }

        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    /* Removes the head of the list and adjusts the list accordingly in O(1) complexity. 
       Doesn't remove anything if the head does not exist. */
    removeHead() {
        if (this.length === 0) {
            return;
        }

        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }

        else {
            this.head = this.head.next;
            this.length--;
        }
    }

    /* Removes the tail of the list and adjusts the list accordingly in O(1) complexity. 
       Doesn't remove anything if the head doesn't exist. */
    removeTail() {
        if(this.length === 0) {
            return;
        }

        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }

        else {
            let node = this.head,
                count = 0;

            while (count < this.length - 1) {
                node = node.next;
                count++;
            }

            this.tail = node;
            this.tail.next = null;
            this.length--;
        }
    }

    /* Checks if a node containing the given value exists in the list in O(N) complexity. 
       If the node does not exist, return -1. */
    find(value) {
        let tempNode = this.head,
            count = 0;
        
        while (count < this.length) {
            if(tempNode.data === value) {
                return count;
            }
            tempNode = tempNode.next;
            count++;
        }

        return -1;
    }

    //Gets the node of a given position in the list in O(N)
    getNodeAt(pos) {
        let tempNode = this.head,
            count = 0;

        if(pos > this.length - 1) {
            return -1;
        }

        else {
            while (count < pos) {
                tempNode = tempNode.next;
                count++
            }
            return tempNode.data;
        }
    }

    //Prints the data of the nodes in the list in O(N)
    printList() {
        let node = this.head;
        while (node) {
            console.log("Value: " + node.data);
            node = node.next;
        }
    }
}

module.exports = SingleLinkedList;