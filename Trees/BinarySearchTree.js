class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /* Base condition checks if nothing exists within the root node.
     We then check if the value belongs to the right or left side of the tree.
     We then continue down the nodes until we hit an empty node and place the value. */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // LEFT
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // RIGHT
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Traverses through the tree and returns the value supplied.
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      // LEFT
      if (value < currentNode.value) {
        parentNode = curentNode;
        currentNode = currentNode.left;
        // RIGHT
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        // FOUND IT NOW LETS REMOVE
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // Makes current left child a child of parent.
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
              // Makes left child a right child of parent.
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          // RIGHT CHILD WHICH DOESNT HAVE A LEFT CHILD
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            // Makes right child of the left the parent.
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
              // Makes right child a right child of the parent.
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          // RIGHT CHILD THAT HAS A LEFT CHILD
        } else {
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
//console.log(tree.lookup(9));
//console.log(tree.lookup(170));
console.log(JSON.stringify(traverse(tree.root)));

// Recursive function that will traverse the tree beginning at a specified node.
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null :
    traverse(node.left);
  tree.right = node.right === null ? null :
    traverse(node.right);
  return tree;
}


