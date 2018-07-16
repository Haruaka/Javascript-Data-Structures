"use strict"

class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.data = value;
    }
}

/* A linked list that holds a pointer to the next and previous node. 
   Shares the same methods as the Single Linked List. */
class DoubleLinkedList {
    constructor() {
        this.head = null,
        this.tail = null,
        this.length = 0;
    }

    add (value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }

        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    removeHead () {
        if (this.length === 0) {
            return;
        }
        
        else if (this. length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }

        else {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        }
    }

    removeTail () {
        if (this.length === 0) {
            return;
        }
        
        else if (this. length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        }

        else {
            this.tail = this.tail.prev;
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

//Double LinkedList Testing Methods:
/*let testList = new DoubleLinkedList();
testList.add(1);
testList.add(2);
testList.add(3);
testList.add(4);
console.log(testList.getNodeAt(2));
console.log(testList.find(3));
testList.removeHead();
testList.removeTail();
testList.printList();*/

module.exports = DoubleLinkedList;