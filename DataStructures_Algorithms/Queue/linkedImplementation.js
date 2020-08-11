const LinkedList = require("../LinkedList"); // used module.exports -> exported as a whole module so no need for destructuring certain methods

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  // pushes the data on to the queue -> O(1)
  enqueue(data) {
    this.queue.append(data);
  }

  // Removes the value at the front of the queue -> O(1) in linked list implementation (only using pointer manipulation)
  dequeue() {
    // check if the list is empty. If not, get the heads data, delete that node from the list given that data value: will
    // be in constant time as delete() best case is O(1) for deleting at head
    if (this.size() > 0) {
      let dataAtHead = this.queue.head.data;
      this.queue.delete(dataAtHead);
    } else {
      return this.queue;
    }
  }

  // Returns the size of the queue -> O(1)
  size() {
    return this.queue.size_();
  }

  // Will return the queues current state -> O(1)
  print() {
    this.queue.print();
  }

  // Will return to the caller the item in the front of the queue -> O(1)
  poll() {
    return this.size() > 0 ? this.queue.head.data : this.queue;
  }
}

// Instantiate a new queue instance
const queue = new Queue();

queue.enqueue(100089);
queue.enqueue(10);
queue.enqueue(101);
queue.enqueue(90);
queue.dequeue();
queue.dequeue();

queue.print();
