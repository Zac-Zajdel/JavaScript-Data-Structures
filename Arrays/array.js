class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Returns the data at the specified index the user supplies.
  get(index) {
    return this.data[index];
  }

  // Adds a specified item to the end of the array.
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Deletes the 'lastItem' at the end of the array. 
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // Deletes any item out of ther array at a specified index. 
  delete(index) {
    // Obtains the item at the index provided by the user.
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  // Helps shift all items in array so an empty spot does not exist. 
  // O(n)
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('Computer');
newArray.push('Science');
newArray.push('Major');
newArray.pop();
newArray.delete(1);
console.log(newArray);