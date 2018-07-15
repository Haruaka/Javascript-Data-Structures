"use strict"

class Node {
    constructor(value) {
        this.next = null;
        this.data = value;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

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

    printList() {
        let node = this.head;
        while (node) {
            console.log("Value: " + node.data);
            node = node.next;
        }
    }
}

//module.exports = SingleLinkedList;