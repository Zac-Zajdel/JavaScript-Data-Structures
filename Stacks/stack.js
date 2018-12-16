class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Returns the item on the top of the stack
  peek() {
    return this.top;
  }

  // Pushes the value onto the stack and increments the length;
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++; 6
    return this;
  }

  // Removes the item on the top of the stack by setting the top item to its next which is the item below it in the stack.
  // Remember: LIFO
  pop() {
    // Checks if the stack even has an item to be popped off. 
    if (!this.top) {
      return null;
    }
    // Checks if only one item exists in the stack
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    if (this.length === 0) {
      return "The stack is empty."
    } else {
      return "The stack has items inside of it."
    }
  }

  clear() {
    return this.length = 0;
  }
}

const myStack = new Stack();
console.log(myStack.push('google'));
console.log(myStack.push('google2'));
console.log(myStack.pop());