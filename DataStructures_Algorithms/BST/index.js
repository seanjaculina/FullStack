class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Will be utilizing the public instance methods which call the private methods to work with the root recursively
class BST {
  constructor() {
    this.root = null;
  }

  // public function which calls the private function that interfaces with our tree
  insert(value) {
    this._insert(this.root, value);
  }

  //private method for insert
  _insert(root, value) {
    if (!root) {
      this.root = new Node(value);
      return this;
    } else {
      let curr = root;
      if (value < curr.value) {
        // if left is null, we placeleft of this node else recurse
        if (!curr.left) {
          curr.left = new Node(value);
          return this;
        } else {
          return this._insert(root.left, value);
        }
      } else if (value > curr.value) {
        // if right is null, we place right of this node else recurse
        if (!curr.right) {
          curr.right = new Node(value);
          return this;
        } else {
          return this._insert(root.right, value);
        }
      }
    }
  }

  remove(data) {
    this.root = this._remove(this.root, data);
  }

  _remove(root, value) {
    if (root == null) {
      return null;
    }
    if (value == root.value) {
      // root has no children
      if (root.left == null && root.right == null) {
        return null;
      }
      // root has no left child
      if (root.left == null) {
        return root.right;
      }
      // root has no right child
      if (root.right == null) {
        return root.left;
      }
      // root has two children
      let temp = root.right;
      while (temp.left !== null) {
        temp = temp.left;
      }
      root.value = temp.value;
      root.right = this._remove(root.right, temp.value);
      return root;
    } else if (value < root.value) {
      root.left = this._remove(root.left, value);
      return root;
    } else {
      root.right = this._remove(root.right, value);
      return root;
    }
  }

  // Find method - implemented as DFS and pre-order
  find(value) {
    return this._find(this.root, value);
  }

  _find(root, value) {
    if (!root) return false;
    if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this._find(root.left, value);
    } else {
      return this._find(root.right, value);
    }
  }

  // returns root or undefined
  poll() {
    return `Root node is ${this.root ? this.root.value : null}`;
  }

  /**
   * Our three print traversals using Depth First Search
   */
  printInOrder() {
    this._printInOrder(this.root);
  }
  printPostOrder() {
    this._printPostOrder(this.root);
  }
  printPreOrder() {
    this._printPreOrder(this.root);
  }

  _printInOrder(root) {
    if (!root) return;
    this._printInOrder(root.left);
    console.log(root.value);
    this._printInOrder(root.right);
  }

  _printPostOrder(root) {
    if (!root) return;
    console.log(root.value);
    this._printPostOrder(root.left);
    this._printPostOrder(root.right);
  }

  _printPreOrder(root) {
    if (!root) return;
    this._printPostOrder(root.left);
    this._printPostOrder(root.right);
    console.log(root.value);
  }

  // finds min element -> O(N)
  findMin() {
    if (!this.root) return null;
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  }

  // finds max element -> O(N)
  findMax() {
    if (!this.root) return null;
    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  }
}

const tree = new BST();

/**
 * Time Complexity for BST:
 *
 * Print -> O(N)
 * Insert -> on average = O(logN) -> worst = O(N)
 * find -> on average = O(logN) -> worst = O(N)
 * delete -> on average = O(logN) -> worst = O(N)
 *
 * why logN ? Because we use a divide and conquer approach which in turn cuts our work
 * in half every iteration which is logN time
 *
 *
 * DFS vs BFS
 *
 * DFS = Depth First Search -> will go deep into the tree and process and children nodes bubbling up to the top
 * BFS = Breadth First Search -> will go level by level looking at all nodes on that level before going to next (this algorithm is super importent)
 */
