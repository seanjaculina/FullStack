// node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Singly-Linked List class
class SinglyLinkedList {
  constructor() {
    this.size = 0; // track size
    this.head = null; // head pointer
    this.tail = null; // tail pointer
  }

  // puts a new node at the end of the list
  append(val) {

    // always make a new node and increment the size first
    const newNode = new Node(val);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // return the node we added
    return newNode;
  }

  //removes the last node and returns it
  removeLast() {
    if (!this.head) {
      return undefined;
    }

    // if the size of the list is only 1: we need to delete that node and assign head/tail to null to restart a new list whenever pushed on to 
    if (this.size === 1) {
      let temp = this.head;
      this.size--;
      this.head = null;
      this.tail = null;
      return temp;
    }

    // do not forget to decrement size
    this.size--;
    let curr = this.head;
    let prev = this.head;

    // traverse till the end of the list [stops at the last node as next points to null]
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    // save node we are deleting for return
    let deletedNode = curr;
    // nullify the last node [which is where curr left off .. this deletes it]
    prev.next = null;
    // reassign tail
    this.tail = prev;

    return deletedNode; //return the node we deleted
  }

  // returns the size of the linkedlist
  size_() {
    return this.size;
  }

}

let list = new SinglyLinkedList();

console.log(list.append(10))
console.log(list.append(100))
list.append(22)
console.log(list.removeLast())
list.removeLast(); // tail correctly points to 100
// list.removeLast();
// list.removeLast();
// list.removeLast() //head/tail are null

// console.log(list.head) // successfully tracks head
// console.log(list.tail) //successfully tracks tail

console.log(list)
// console.log(list.size_())