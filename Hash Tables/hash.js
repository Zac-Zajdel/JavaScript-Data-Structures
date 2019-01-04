class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Underscore is common standard to indicate it is a private property.
  // Simple algorithm to create a a hash for an item. 
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Places an item into the hash table.
  set(key, value) {
    let address = this._hash(key);
    // Checks to see that nothing exists in that address space to avoid collisions.
    if (!this.data[address]) {
      this.data[address] = [];
    } else {
      // Puts the item in the array anyways knowing that the efficiency will not be O(1)
      this.data[address].push([key, value]);
    }
    return this.data;
  }

  // Obtains the value from the provides key. 
  get(key) {
    let address = this._hash(key);
    // Gets the key/value pairs array location
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        // Goes to every single array position until the keys match up.S
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
      return undefined;
    }
  }

  // Obtains the keys from the table.
  // Have to look so O(n).
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // Remember it is already in an array so its a third-dimensional array. Duhh Zac.
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

}

// Instantiate a new hash table.
const myHashTable = new HashTable(50);
console.log(myHashTable._hash('grapes'));
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 500));
console.log(myHashTable.set('oranges', 2));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());
