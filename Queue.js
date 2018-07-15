class Queue {
    constructor() {
        this.queue = [];
    }

    add(value) {
        this.queue.push(value);
    }

    remove() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        if(this.queue.length > 0) {
            return false;
        }

        return true;
    }

    getSize() {
        return this.queue.length;
    }

    printQueue() {
        console.log(this.queue.join(", "))
    }
}
module.exports = Queue;



class Pet {
    constructor (type) {
        this.type = type;
    }
}

class PetQueue{
    constructor (){
        this.queue = [];
    }

    enqueue (type) {
        let temp = new Pet(type);
        this.queue.push(temp.type);
    }

    dequeue(){
        return this.queue.shift();
    }

    dequeueDog() {
        let tempPet = this.queue.shift(),
            temp = [];
        
        while (tempPet !== "dog" && this.queue.length > 0) {
            temp.push(tempPet);
            //temp.printQueue();
            tempPet = this.queue.shift();
        }

        while (this.queue.length > 0) {
            temp.push(this.queue.shift());
        }

        this.queue = temp;

        if(tempPet === "dog") {
            return tempPet;
        }
        this.queue.push(tempPet);
        return -1;
    }

    dequeueCat() {
        let tempPet = this.queue.shift(),
            temp = [];
        
        while (tempPet !== "cat" && this.queue.length > 0) {
            temp.push(tempPet);
            //temp.printQueue();
            tempPet = this.queue.shift();
        }

        while (this.queue.length > 0) {
            temp.push(this.queue.shift());
        }

        this.queue = temp;

        if(tempPet === "cat") {
            return tempPet;
        }
        this.queue.push(tempPet);
        return -1;
    }

    printQueue() {
        console.log(this.queue.join(", "))
    }
}

/*let test = new PetQueue();
test.enqueue("cat");
test.enqueue("cat");
test.enqueue("cat");
console.log("Original Queue: ")
test.printQueue();

console.log("Post Dequeue Test: ")
test.dequeueDog();
test.printQueue();*/