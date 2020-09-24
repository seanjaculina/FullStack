class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    // each BST needs a root node
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
}

const tree = new BST();

tree.insert(10);
tree.insert(12);
tree.insert(33);
tree.insert(3);
tree.insert(5);
tree.insert(101);
tree.insert(8);
console.log(tree);
