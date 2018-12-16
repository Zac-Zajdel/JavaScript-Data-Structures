class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Finds the first item of the queue.
  peek() {
    return this.first;
  }

  // Places the value on the end (FIFO)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // Takes the first item in the queue out FIFO
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

}
const myQueue = new Queue();
console.log(myQueue.enqueue('Google'));
console.log(myQueue.enqueue('Google 2.0'));
console.log(myQueue.enqueue('Google 3.0'));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
