/**
 * Defines a node object for the list
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  // to initialize new linked list
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // puts the node at the front
  insertAtFront(data) {
    // Create a new node
    const newNode = new Node(data);
    this.size++;

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // appends to list
  append(data) {
    const newNode = new Node(data);
    this.size++;
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;

      // notice curr.next and not curr -- this is because we want to insert at the end, so, we want to go up to the end, where the node points to something not null
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  // finds a value in the list, if it exists
  find(data) {
    if (!this.head) return false;
    let curr = this.head;
    while (curr) {
      if (curr.data === data) {
        return true;
      }
      curr = curr.next;
    }
  }

  // Finds position to insert - will insert in the ascending order position (e.g: insert 4 , currList = 1,2,10 we would insert after 2)
  insert(data) {
    this.size++;
    // If empty, simply insert at front reusing the method
    if (!this.head) {
      this.insertAtFront(data);
      return;
    }
    // Create a new node
    const newNode = new Node(data);
    // If this value is smaller than head: must put in front
    if (data <= this.head.data) {
      this.insertAtFront(data);
      return;
    }
    let curr = this.head;
    let temp = null;

    // traverse finding sorted insert position or put at end
    while (curr) {
      if (data <= curr.data) {
        temp.next = newNode;
        newNode.next = curr;
        break;
      }
      temp = curr;
      curr = curr.next;
    }
  }

  // Deletes a node at that specific nodes location, if it exists
  delete(data) {
    if (!this.head) return;
    this.size--;

    // If the head is the node to delete, simply move the head to the next node - or assigns to null if there are no more
    if (data === this.head.data) {
      this.head = this.head.next;
    }
    let curr = this.head;
    let temp = null;
    while (curr) {
      // If we have a match, remove the node and return
      if (curr.data === data) {
        temp.next = curr.next;
        curr = null;
        return;
      }
      temp = curr;
      curr = curr.next;
    }
  }

  // removeFirst() {
  //   if (!this.head) return;
  //   else {
  //     let temp = this.head.data;
  //     this.head = this.head.next;
  //     return temp;
  //   }
  // }

  // Removes last element in the list
  removeLast() {
    if (!this.head) return;
    this.size--;
    // if the list is only one node - this is a special case
    if (!this.head.next) {
      this.head = null;
    } else {
      let curr = this.head;
      let temp = null;
      while (curr.next) {
        temp = curr;
        curr = curr.next;
      }
      let t = curr.data;
      temp.next = null;
      curr = null;
      return t;
    }
  }

  print() {
    if (!this.head) return;
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

  size_() {
    return this.size;
  }
}

// Create a new linked list - all methods were tested. Mess with the list as you wish
// const list = new LinkedList();
// list.append(10);
// list.removeLast();
// console.log(list.size_());
/**
 * Time complexities:
 *
 * insertAtFront() => O(1)
 * append() => O(N)  [O(1) if utilizing a tail]
 * insert() => [best case: O(1) avg/worst: O(N)]
 * print() => O(N)
 * delete() => O(N)
 */

// to use in another file if we want - will see this in use in the stack {can wrap in curlies, or not - if we do, we need to destructure in the import}
module.exports = LinkedList;
