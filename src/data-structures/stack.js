// Stack Implementation
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
console.log(stack.pop()); // Output: 10
