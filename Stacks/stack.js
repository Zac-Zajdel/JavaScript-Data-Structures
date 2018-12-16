// LIFO
class Stack {
  constructor() {
    this.array = [];
  }

  // Returns the item on the top of the stack
  peek() {
    return this.array[this.array.length - 1];
  }

  // Pushes the value onto the stack and increments the length;
  push(value) {
    this.array.push(value);
    return this;
  }

  // Uses the array pop() built-in function to take the last item off of the "stack"
  pop() {
    this.array.pop();
    return this;
  }

  // Boolean checking if the stack has any values
  isEmpty() {
    if (this.array.length === 0) {
      return "The stack is empty."
    } else {
      return "The stack has items inside of it."
    }
  }
}

// const myStack = new Stack();
// console.log(myStack.push('Google'));
// console.log(myStack.push('Google 2.0'));
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.isEmpty());