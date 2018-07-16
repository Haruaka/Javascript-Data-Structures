"use-strict"

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        if(this.stack.length > 0) {
            return false;
        }
        return true;
    }

    getSize() {
        return this.stack.length;
    }

    printStack() {
        console.log(this.stack.join(", "));
    }
}
module.exports = Stack;



//Solutions to the Stacks & Queues section of Cracking the Coding Interview

//A stack connected to multiple inner stacks. When one stack gets too full, a new stack is created.
class setOfStacks {
    constructor(lim) {
        this.stackSet = [];
        this.limit = lim;
    }

    push(value) {
        if(this.stackSet.length === 0) {
            let tempStack = new Stack();
            tempStack.push(value);
            this.stackSet.push(tempStack);
        }

        else {
            let stackTail = this.stackSet.length - 1;
            if(this.stackSet[stackTail].getSize() < this.limit) {
                this.stackSet[stackTail].push(value);
            }

            else{
                let tempStack = new Stack();
                tempStack.push(value);
                this.stackSet.push(tempStack);
            }
        }
    }

    pop() {
        if(this.stackSet.length === 0) {
            return;
        }

        else {
            let stackTail = this.stackSet.length - 1;
            let value = this.stackSet[stackTail].pop();

            if(this.stackSet[stackTail].getSize() === 0) {
                this.stackSet.pop();
            }

            return value;
        }

    }

    popAt(pos) {
        if(pos >= this.stackSet.length) {
            return;
        }

        else {
            let value = this.stackSet[pos].pop();
            if(this.stackSet[pos].getSize() === 0) {
                this.stackSet.pop();
            }
            return value;
        }

    }

    printSetOfStacks() {
        let count = 0;
        while (count < this.stackSet.length){
            console.log('\n', "Stack #" + count + ": ");
            this.stackSet[count].printStack();
            count++;
        }
    }
}
/*let testStack = new setOfStacks(3);
for(let i = 0; i < 11; i++) {
    testStack.push(i);
}
console.log("The Original Set of Stacks Before Popping");
testStack.printSetOfStacks();
console.log("", "\n");

console.log("The Set of Stacks After Popping");
console.log(testStack.popAt(4));
console.log(testStack.popAt(1));
for(let i = 0; i < 3; i++) {
    console.log(testStack.pop());
}
testStack.printSetOfStacks();*/


//Queue built using a stack
class myQueue {
    constructor(){
        this.oldStack = new Stack();
        this.newStack = new Stack();
    }

    add(value) {
        this.oldStack.push(value);
    } 

    reverseStack () {
        this.newStack.push(this.oldStack.pop());
    }

    remove() {
        this.reverseStack();
        return this.newStack.pop();;
    }
}
/*let testQueue = new myQueue();

for (let i = 0; i < 10; i++) {
    testQueue.add(i);
}

for(let i = 0; i < 10; i++) {
    console.log(testQueue.remove());
}*/


//Sorting a stack by using three stacks.
function stackSort(original) {
    let max = 0,
        length = original.getSize(),
        tempStack = new Stack(),
        sortedStack = new Stack();
    
    while (sortedStack.getSize() < length) {
        if (tempStack.getSize() < 1) {
            while (!original.isEmpty()) {
                console.log("Max Pt: " + max);
                if(max < original.peek()) {
                    if(max === 0) {
                        max = original.pop();
                    }

                    else {
                        tempStack.push(max);
                        max = original.pop();
                    }
                }

                else {
                    tempStack.push(original.pop());
                }
            }
        }

        else {
            while (!tempStack.isEmpty()) {
                console.log("Max Pt: " + max);
                
                if(max < tempStack.peek()) {
                    if(max === 0) {
                        console.log("Went here!");
                        max = tempStack.pop();
                    }

                    else {
                        original.push(max);
                        max = tempStack.pop();
                    }
                }

                else {
                    original.push(tempStack.pop());
                }
            }
        }
        console.log("Max Pt: " + max);
        sortedStack.push(max);
        max = 0;
    }

    return sortedStack;
}
/*let unsortedStack = new Stack();
unsortedStack.push(2);
unsortedStack.push(1);
unsortedStack.push(4);
unsortedStack.push(3);

unsortedStack.printStack();
console.log("Original Stack Size: " + unsortedStack.getSize());
unsortedStack = stackSort(unsortedStack);
unsortedStack.printStack();*/


