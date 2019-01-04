// Create a node class that will store the data
class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  // Creates a new node at the end of the list with the supplied value
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Creates a new node at the front of the list with the supplied value
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode
    this.length++;
    return this;
  }

  // Inserts an element at a given index anywhere inside of the list
  // We then have to adjust the pointers of the node before and after the insertion index.
  insert(index, value) {
    // Puts the item at the end of the linked list if the index provided is too big.
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    // Grabs the node to the left of the insertion point
    const leader = this.traverseToIndex(index - 1);
    // Temporary pointer that will be changed.
    const follower = leader.next;
    // Puts the leader (the node before the insert) next to the new Node inserted.
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  }

  // Takes the index and goes to the node that is located in that position
  // This causes the insert to O(n) because we have to traverse through the list.
  traverseToIndex(index) {
    let counter = 0;
    // places the current node at the head of the linked list
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // Removes an item at a given index
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    // Assign leaders next to the next node of the unwanted node
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  reverse() {
    if (this.length == 1) {
      return this.head;
    }
    let first = this.head;
    // Because we reversed the list
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    // Last item in the list.
    this.head.next = null;
    // Sets it up to be reversed again in future. 
    this.head = first;
  }

  // Returns the size of the list
  size() {
    return `The size of the list is: ${this.length}`;
  }

  // If the length has a value of 0, return that the list is empty. 
  isEmpty() {
    if (this.length === 0) {
      return "The list is empty";
    }
  }

  // prints out the linked list in an array to better visibility
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

// Instantiate the doubly linked list.
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(5);
myLinkedList.append(50);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
console.log(myLinkedList.size());

