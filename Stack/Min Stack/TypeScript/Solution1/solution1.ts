class MinStack {
    stackTop: number;
    stackElements: any[];
    minStack: any[];

    constructor() {
        this.stackElements = [];
        this.minStack = []; 
        this.stackTop = 0;
    }

    push(val: number): void {
        this.stackElements[this.stackTop] = val;
        this.stackTop++;

        // Update the minStack with the current minimum value
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        const popped = this.stackElements.pop();
        this.stackTop--;

        if (popped === this.getMin()) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stackElements[this.stackTop - 1];
    }

    getMin(): number {
        if (this.minStack.length > 0) {
            return this.minStack[this.minStack.length - 1];
        }
        return Infinity;
    }
}